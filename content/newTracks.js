export const title = "Tracks & Challenges";

export const track_cards = [
    {
        title: "First Timers",
        icon: `https://icon.now.sh/laptop_mac/${lightAccentColor.slice(1)}/34`,
        text: "We live in a society where everything is customized, from your phone case to your coffee order. So why shouldn't your browser be too? Chrome extensions allow you to craft and tailor your ideal browsing experience in a few short lines of code. In this track, you'll build a Chrome extension from scratch using HTML/CSS and JavaScript.",
        href: "https://github.com/hack-rice/HR8.5-First-Timers-Track"
    },
    {
        title: "FinTech",
        icon: `https://icon.now.sh/trending_up/${lightAccentColor.slice(1)}/34`,
        text: "From big banks to the everyday consumer, technology is changing the way we approach finance. Create a project that exemplifies an aspect of financial technology. Whether its data science related or a web/mobile application, the possibilities are endless!",
        href: "https://github.com/hack-rice/HR8.5-FinTech-Track"
    }
].map(card => {
    card.key = `link-${card.title}`;
    return card;
});