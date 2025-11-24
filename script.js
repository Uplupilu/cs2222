// 1. Данные о составе + Дата рождения (ГГГГ-ММ-ДД) + История
const currentRoster = [
    { 
        nick: "Aleksib", 
        name: "Aleksi Virolainen", 
        role: "IGL", 
        birthDate: "1997-03-30", // Дата рождения
        photo: "https://img-cdn.hltv.org/playerbodyshot/9h_l-8y-7k-Fj-5d-3s-2a.png?bg=3e4c54&h=800&ixlib=java-2.1.0&rect=132%2C12%2C451%2C451&w=800&s=1f1f1f",
        history: [
            { year: "2023 - Present", team: "Natus Vincere" },
            { year: "2022 - 2023", team: "Ninjas in Pyjamas" },
            { year: "2022 - 2022", team: "G2 Esports" },
            { year: "2019 - 2021", team: "OG" },
            { year: "2018 - 2019", team: "ENCE" }
        ]
    },
    { 
        nick: "iM", 
        name: "Mihai Ivan", 
        role: "Rifler", 
        birthDate: "1999-07-29",
        photo: "https://img-cdn.hltv.org/playerbodyshot/p5_l-9y-2k-Gj-4d-1s-8a.png?bg=3e4c54&h=800&ixlib=java-2.1.0&rect=132%2C12%2C451%2C451&w=800&s=2a2a2a",
        history: [
            { year: "2023 - Present", team: "Natus Vincere" },
            { year: "2021 - 2023", team: "GamerLegion" },
            { year: "2018 - 2021", team: "Nexus" }
        ]
    },
    { 
        nick: "b1t", 
        name: "Valerij Vakhovsjkyj", 
        role: "Rifler", 
        birthDate: "2003-01-05",
        photo: "https://img-cdn.hltv.org/playerbodyshot/k4_l-5y-3k-Hj-9d-2s-7a.png?bg=3e4c54&h=800&ixlib=java-2.1.0&rect=132%2C12%2C451%2C451&w=800&s=3b3b3b",
        history: [
            { year: "2020 - Present", team: "Natus Vincere" },
            { year: "2019 - 2020", team: "NaVi Junior" }
        ]
    },
    { 
        nick: "jL", 
        name: "Justinas Lekavicius", 
        role: "Rifler", 
        birthDate: "1999-09-29",
        photo: "https://img-cdn.hltv.org/playerbodyshot/o2_l-1y-6k-Ij-8d-4s-5a.png?bg=3e4c54&h=800&ixlib=java-2.1.0&rect=132%2C12%2C451%2C451&w=800&s=4c4c4c",
        history: [
            { year: "2023 - Present", team: "Natus Vincere" },
            { year: "2022 - 2023", team: "Apeks" },
            { year: "2021 - 2022", team: "MAD Lions" }
        ]
    },
    { 
        nick: "w0nderful", 
        name: "Ihor Zhdanov", 
        role: "AWPer", 
        birthDate: "2004-12-14",
        photo: "https://img-cdn.hltv.org/playerbodyshot/m8_l-4y-8k-Jj-7d-6s-9a.png?bg=3e4c54&h=800&ixlib=java-2.1.0&rect=132%2C12%2C451%2C451&w=800&s=5d5d5d",
        history: [
            { year: "2023 - Present", team: "Natus Vincere" },
            { year: "2022 - 2023", team: "Sprout" },
            { year: "2022 - 2022", team: "Team Spirit" },
            { year: "2021 - 2022", team: "HellRaisers" }
        ]
    },
    { 
        nick: "B1ad3", 
        name: "Andrij Ghorodensjkyj", 
        role: "Coach", 
        birthDate: "1986-10-11",
        photo: "https://img-cdn.hltv.org/playerbodyshot/n3_l-7y-5k-Kj-1d-9s-0a.png?bg=3e4c54&h=800&ixlib=java-2.1.0&rect=132%2C12%2C451%2C451&w=800&s=6e6e6e",
        history: [
            { year: "2019 - Present", team: "Natus Vincere (Coach)" },
            { year: "2019", team: "Natus Vincere (Esports Director)" },
            { year: "2018 - 2019", team: "Gambit (Coach)" },
            { year: "2015 - 2018", team: "FlipSid3 Tactics (Player)" }
        ]
    }
];

const majorsData = [
    { name: "PGL Major Copenhagen 2024", date: "Март 2024", place: "1st Place 🏆", prize: "$500,000", isWin: true, lineup: ["Aleksib", "iM", "b1t", "jL", "w0nderful"] },
    { name: "BLAST.tv Paris Major 2023", date: "Май 2023", place: "9-11th", prize: "$20,000", isWin: false, lineup: ["s1mple", "electroNic", "Perfecto", "b1t", "npl"] },
    { name: "IEM Rio Major 2022", date: "Ноябрь 2022", place: "5-8th", prize: "$45,000", isWin: false, lineup: ["s1mple", "electroNic", "Perfecto", "b1t", "sdy"] },
    { name: "PGL Major Antwerp 2022", date: "Май 2022", place: "2nd Place", prize: "$150,000", isWin: false, lineup: ["s1mple", "electroNic", "Perfecto", "b1t", "Boombl4"] },
    { name: "PGL Major Stockholm 2021", date: "Ноябрь 2021", place: "1st Place 🏆", prize: "$1,000,000", isWin: true, lineup: ["s1mple", "electroNic", "Perfecto", "b1t", "Boombl4"] }
];

const fallbackImage = "https://www.hltv.org/img/static/player/player_silhouette.png";

// Вспомогательная функция: Расчет возраста
function calculateAge(birthDateString) {
    const today = new Date();
    const birthDate = new Date(birthDateString);
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    // Если день рождения еще не наступил в этом году, вычитаем 1 год
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
}

// Вспомогательная функция: Красивый формат даты (30.03.1997)
function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('ru-RU');
}

// --- ФУНКЦИЯ 1: Отрисовка ГЛАВНОЙ страницы ---
function renderHome() {
    const rosterContainer = document.getElementById('active-roster');
    if (rosterContainer) {
        currentRoster.forEach(player => {
            const card = document.createElement('div');
            card.className = 'player-card';
            card.style.cursor = 'pointer';
            
            card.onclick = () => {
                window.location.href = `player.html?nick=${player.nick}`;
            };

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
            rosterContainer.appendChild(card);
        });
    }

    const historyContainer = document.getElementById('majors-list');
    if (historyContainer) {
        let totalMoney = 0;
        let wins = 0;
        majorsData.forEach(major => {
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
                <div class="lineup">${lineupHtml}</div>
            `;
            historyContainer.appendChild(card);
        });
        document.getElementById('total-prize').innerText = `$${totalMoney.toLocaleString()}`;
        document.getElementById('majors-won').innerText = wins;
    }
}

// --- ФУНКЦИЯ 2: Отрисовка страницы ИГРОКА ---
function renderPlayerProfile() {
    const profileContainer = document.getElementById('profile-content');
    if (!profileContainer) return; 

    const params = new URLSearchParams(window.location.search);
    const nick = params.get('nick');

    const player = currentRoster.find(p => p.nick === nick);

    if (!player) {
        profileContainer.innerHTML = "<h2>Игрок не найден</h2><a href='index.html'>Вернуться</a>";
        return;
    }

    // Считаем возраст и форматируем дату
    const age = calculateAge(player.birthDate);
    const formattedDate = formatDate(player.birthDate);

    const historyHtml = player.history.map(item => `
        <div class="history-item">
            <span class="team-year">${item.year}</span>
            <span class="team-name">${item.team}</span>
        </div>
    `).join('');

    profileContainer.innerHTML = `
        <div class="profile-sidebar">
            <img src="${player.photo}" class="big-photo" onerror="this.src='${fallbackImage}'">
            <h1 class="profile-nick">${player.nick}</h1>
            <div class="profile-name">${player.name}</div>
            <div class="player-role" style="font-size: 1.2rem; margin-bottom: 10px;">${player.role}</div>
            
            <div class="player-meta">
                Дата рождения: <br>
                <span>${formattedDate}</span> (${age} лет)
            </div>
        </div>

        <div class="profile-history">
            <div class="history-title">История клубов</div>
            <div class="team-history-list">
                ${historyHtml}
            </div>
        </div>
    `;
}

document.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById('active-roster')) renderHome();
    if (document.getElementById('profile-content')) renderPlayerProfile();
});
