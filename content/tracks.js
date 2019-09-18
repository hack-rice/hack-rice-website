export const title = "Tracks & Challenges";

export const cards = [
    {
        icon: "https://icon.now.sh/bubble_chart/ffffff",
        type: "track",
        title: "First Timers' Track",
        href: "https://github.com/hack-rice/HR9-First-Timers-Track",
        text: "We live in a society where everything is customized, from your phone case to your coffee order. So why shouldn't your browser be too? Chrome extensions allow you to craft and tailor your ideal browsing experience in a few short lines of code. In this track, you'll build a Chrome extension from scratch using HTML/CSS and JavaScript."
    },
    {
        icon: "https://icon.now.sh/user/ffffff",
        type: "track",
        title: "Ethics Track",
        href: "https://github.com/hack-rice/HR9-Ethics-Track",
        text: "Computing and technology are neutral for the most part. They can be used to enhance the best aspects of human nature (such as empathy, creativity, and generosity), or they can allow the worst aspects of it (such as prejudice, selfishness, and irrational thinking) to flourish and cause harm. Incorporating ethics into design and coding involves trying to anticipate all the ways – positive and negative – humans may use and interact with tech. While it’s difficult to exert complete control over human users, tech can be designed to promote particular behavior and outcomes."
    },
    {
        icon: "https://icon.now.sh/border_color/ffffff",
        type: "track",
        title: "Design Track",
        href: "https://github.com/hack-rice/HR9-Design-Track",
        text: (
            <p>
                Based off the CSS Zen Garden, this track aims to show you the power of HTML and CSS.
                <br />
                <br />
                CSS stands for Cascading Style Sheets with an emphasis placed on “Style.” While HTML is used to structure a web document (defining things like headlines and paragraphs, and allowing you to embed images, video, and other media), CSS comes through and specifies your document’s style—page layouts, colors, and fonts are all determined with CSS. (<a href="https://skillcrush.com/2012/04/03/css/">source</a>)
                <br />
                <br />
                "Although there are new tools and technologies to help with frontend design, we want to focus our attention back on the basics. CSS is a powerful and often overlooked tool, and with this design track, we hope you will learn something new about CSS.")
            </p>)
    },
    {
        icon: "https://icon.now.sh/timeline/ffffff",
        type: "track",
        title: "Data Science and Machine Learning Track",
        href: "https://github.com/hack-rice/HR9-DS-ML-Track",
        text: "This track will allow you to explore interesting data sets using machine learning and other data science techniques. The goal is simple – find something interesting in your data and present it in a compelling manner. Projects with a social impact are especially encouraged."
    },
    {
        icon: "https://icon.now.sh/local_gas_station/ffffff",
        type: "challenge",
        title: "Schlumberger",
        text:
            "From classical statistical methods to real-time constraint optimization, Bayesian neural networks, and reinforcement learning, Schlumberger uses Machine Learning to gain maximum insight from huge volumes of data.  Our challenge for you: use Machine Learning to solve a problem of your choice.  We will grade you on your idea, your implementation, and the amount of fun you had hacking! "
    },
    {
        icon: "https://icon.now.sh/facebook/ffffff",
        type: "challenge",
        title: "Facebook",
        text: "More information coming soon!"
    },
    {
        icon: "https://icon.now.sh/domain/ffffff",
        type: "challenge",
        href: "http://api.reimaginebanking.com/",
        title: "Capital One",
        text:
            "Best Financial Hack: How will you reimagine banking?"
    },
    {
        icon: "https://icon.now.sh/merge_type/ffffff",
        type: "challenge",
        title: "Two Sigma",
        text:
            "At Two Sigma, we use machine learning, distributed computing and other technologies to find connections in the world’s data. We work with vast quantities of information from over a thousand diverse sources. We love learning from others, and we want to see what you can do in the data science space. We’ll award a prize for the best use of data analysis, data science, or big data technologies."
    },
    // {
    //     icon: "https://icon.now.sh/report_problem/ffffff",
    //     type: "challenge",
    //     title: "JP Morgan Chase",
    //     href: "../static/files/jpmorgan.pdf",
    //     text:
    //         "We challenge you to create a web or mobile application that would either promote financial literacy for individuals (college students, unbanked adults, small businesses, etc) on or provide financial advisory/education on derivatives, futures trading, or how to invest to companies. In addition to providing gamified, guided learning, the application should present users with interactive scenarios. Click through for more details about this challenge."
    // },
    {
        icon: "https://icon.now.sh/report_problem/ffffff",
        type: "challenge",
        title: "Bill.com",
        text:
            "This year, Bill.com will be challenging hackers to think of creative ways to make it easier for businesses to connect and do business. The Bill.com team will work closely with hackers on how to use the Bill.com API, and host a Q&A workshop to share best practices"
    }
].map(card => {
    card.key = `card-${card.title}`;
    return card;
});
