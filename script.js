// 1. Данные о текущем составе с фото
// Если фото перестанут грузиться, скачай их и замени ссылки на локальные (например: 'images/aleksib.jpg')
const currentRoster = [
    { 
        nick: "Aleksib", 
        name: "Aleksi Virolainen", 
        role: "IGL", 
        photo: "https://img-cdn.hltv.org/playerbodyshot/9h_l-8y-7k-Fj-5d-3s-2a.png?bg=3e4c54&h=800&ixlib=java-2.1.0&rect=132%2C12%2C451%2C451&w=800&s=1f1f1f" 
    },
    { 
        nick: "iM", 
        name: "Mihai Ivan", 
        role: "Rifler", 
        photo: "https://img-cdn.hltv.org/playerbodyshot/p5_l-9y-2k-Gj-4d-1s-8a.png?bg=3e4c54&h=800&ixlib=java-2.1.0&rect=132%2C12%2C451%2C451&w=800&s=2a2a2a" 
    },
    { 
        nick: "b1t", 
        name: "Valerij Vakhovsjkyj", 
        role: "Rifler", 
        photo: "https://img-cdn.hltv.org/playerbodyshot/k4_l-5y-3k-Hj-9d-2s-7a.png?bg=3e4c54&h=800&ixlib=java-2.1.0&rect=132%2C12%2C451%2C451&w=800&s=3b3b3b" 
    },
    { 
        nick: "jL", 
        name: "Justinas Lekavicius", 
        role: "Rifler", 
        photo: "https://img-cdn.hltv.org/playerbodyshot/o2_l-1y-6k-Ij-8d-4s-5a.png?bg=3e4c54&h=800&ixlib=java-2.1.0&rect=132%2C12%2C451%2C451&w=800&s=4c4c4c" 
    },
    { 
        nick: "w0nderful", 
        name: "Ihor Zhdanov", 
        role: "AWPer", 
        photo: "https://img-cdn.hltv.org/playerbodyshot/m8_l-4y-8k-Jj-7d-6s-9a.png?bg=3e4c54&h=800&ixlib=java-2.1.0&rect=132%2C12%2C451%2C451&w=800&s=5d5d5d" 
    },
    { 
        nick: "B1ad3", 
        name: "Andrij Ghorodensjkyj", 
        role: "Coach", 
        photo: "https://img-cdn.hltv.org/playerbodyshot/n3_l-7y-5k-Kj-1d-9s-0a.png?bg=3e4c54&h=800&ixlib=java-2.1.0&rect=132%2C12%2C451%2C451&w=800&s=6e6e6e" 
    }
];

// Fallback: если фото не найдено, используем заглушку
const fallbackImage = "https://www.hltv.org/img/static/player/player_silhouette.png";

// 2. Данные о Мейджорах
const majorsData = [
    {
        name: "PGL Major Copenhagen 2024",
        date: "Март 2024",
        place: "1st Place 🏆",
        prize: "$500,000",
        isWin: true,
        lineup: ["Aleksib", "iM", "b1t", "jL", "w0nderful"]
    },
    {
        name: "BLAST.tv Paris Major 2023",
        date: "Май 2023",
        place: "9-11th",
        prize: "$20,000",
        isWin: false,
        lineup: ["s1mple", "electroNic", "Perfecto", "b1t", "npl"]
    },
    {
        name: "IEM Rio Major 2022",
        date: "Ноябрь 2022",
        place: "5-8th",
        prize: "$45,000",
        isWin: false,
        lineup: ["s1mple", "electroNic", "Perfecto", "b1t", "sdy"]
    },
    {
        name: "PGL Major Antwerp 2022",
        date: "Май 2022",
        place: "2nd Place",
        prize: "$150,000",
        isWin: false,
        lineup: ["s1mple", "electroNic", "Perfecto", "b1t", "Boombl4"]
    },
    {
        name: "PGL Major Stockholm 2021",
        date: "Ноябрь 2021",
        place: "1st Place 🏆",
        prize: "$1,000,000",
        isWin: true,
        lineup: ["s1mple", "electroNic", "Perfecto", "b1t", "Boombl4"]
    }
];

// Функция отображения текущего состава
function renderRoster() {
    const container = document.getElementById('active-roster');
    
    currentRoster.forEach(player => {
        const card = document.createElement('div');
        card.className = 'player-card';
        
        // Проверка на наличие фото. Если ссылка битая, сработает onerror и поставит заглушку
        const imgHtml = `
            <img src="${player.photo || fallbackImage}" 
                 alt="${player.nick}" 
                 class="player-photo" 
                 onerror="this.onerror=null;this.src='${fallbackImage}';">
        `;

        card.innerHTML = `
            ${imgHtml}
            <div class="player-nick">${player.nick}</div>
            <div class="player-real-name">${player.name}</div>
            <div class="player-role">${player.role}</div>
        `;
        container.appendChild(card);
    });
}

// Функция отображения истории
function renderHistory() {
    const container = document.getElementById('majors-list');
    let totalMoney = 0;
    let wins = 0;

    majorsData.forEach(major => {
        // Очистка строки с деньгами для подсчета
        const moneyValue = parseInt(major.prize.replace(/[^0-9]/g, '')) || 0;
        totalMoney += moneyValue;

        if(major.isWin) wins++;

        const card = document.createElement('div');
        card.className = `major-card ${major.isWin ? 'winner' : ''}`;
        
        const lineupHtml = major.lineup.map(nick => `<span>${nick}</span>`).join('');

        card.innerHTML = `
            <div class="major-info">
                <h3>${major.name}</h3>
                <span>${major.date}</span>
            </div>
            <div class="major-result">
                <div>${major.place}</div>
                <div style="color: #fff;">${major.prize}</div>
            </div>
            <div class="lineup">
                ${lineupHtml}
            </div>
        `;
        container.appendChild(card);
    });

    document.getElementById('total-prize').innerText = `$${totalMoney.toLocaleString()}`;
    document.getElementById('majors-won').innerText = wins;
}

document.addEventListener('DOMContentLoaded', () => {
    renderRoster();
    renderHistory();
});
