export const title = 'Prizes';

export const places = [
    {
        place: "1st Place",
        prize: "Nintendo Switch"
    },
    {
        place: "2nd Place",
        prize: "Bose Earbuds"
    },
    {
        place: "3rd Place",
        prize: "Fitbit Charges"
    }
].map(prize => {prize.key = `item-${prize.place}`;
return prize;});

export const trackWinners = [
    {
        
        place: "First Timers Track Winner",
        prize: "Google Home Minis"
    },
    {
        place: "FinTech Track Winner",
        prize: "Amazon Echo Plus"
    }
].map(prize => {prize.key = `item-${prize.place}`;
return prize;});




