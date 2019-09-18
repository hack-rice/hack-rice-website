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
        icon: "https://icon.now.sh/bitcoin/ffffff",
        type: "challenge",
        title: "Bill.com",
        href: "https://docs.google.com/document/d/154aVkbCMp0_NQgSIhCm5t5iqqsXPrrmygN0p7_g7qX4/edit",
        text: (
            <>
                <p>
                    This year, Bill.com will be challenging hackers to think of creative ways to
                    make it easier for businesses to connect and do business. The Bill.com team
                    will work closely with hackers on how to use the Bill.com API, and host a
                    Q&A workshop to share best practices
                </p>
            </>
        )
    },
    {
        icon: "https://icon.now.sh/local_gas_station/ffffff",
        type: "challenge",
        title: "Schlumberger",
        text:
            "From classical statistical methods to real-time constraint optimization, Bayesian neural networks, and reinforcement learning, Schlumberger uses Machine Learning to gain maximum insight from huge volumes of data.  Our challenge for you: use Machine Learning to solve a problem of your choice.  We will grade you on your idea, your implementation, and the amount of fun you had hacking! "
    },
    {
        icon: "https://icon.now.sh/local_gas_station/ffffff",
        type: "challenge",
        title: "Chevron’s real-time work order scheduling optimization",
        text:(
            <>
                <p>
                    Background: Chevron has large scale operations and complex process facilities (refineries and
                    liquified natural gas production facilities). Scheduling work orders on these facilities with differing repair
                    requirements, specialized technicians, and potentially hours of drive time between locations can be
                    difficult.
                </p>

                <p>
                    Challenge: Build a work order tracking system that tracks (1) the work orders that are submitted and
                    (2) the technicians that are completing them to optimize how technicians are assigned and work orders
                    are completed. Knowing where technicians are, what they are certified/qualified to repair, how long they
                    are planning to being there, other work orders in the same or nearby location, etc will be invaluable in
                    being able to dynamically schedule and dispatch existing and new work orders to technicians at the
                    beginning of the day and while onsite. Updating each technician with their schedule of work orders can
                    be done through any means of mobile technology, SMS, call, mobile app, etc.
                </p>
            </>
        )

    },
    {
        icon: "https://icon.now.sh/facebook/ffffff",
        type: "challenge",
        title: "Facebook",
        text: "More information coming soon!"
    },
    {
        icon: "https://icon.now.sh/airplanemode_active/ffffff",
        type: "challenge",
        title: "ForeFlight: Airport Recommendation Challenge",
        href: "http://bit.ly/HackRiceForeFlight2019",
        text: (
            <>
                <p>
                    A pilot decides she wants to go flying this weekend because the weather is
                    really nice, but she can’t decide where she wants to go. We know what airports
                    she’s flown to in the past; what’s an airport she’s never been to but would
                    enjoy flying to? Use our historical data to build a machine learning model that
                    can recommend a new flying destination. Then, if you’re up for the challenge,
                    package the model into an iOS app for on-the-go flight planning!
                </p>
            </>
        )
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
    {
        icon: "https://icon.now.sh/thumb_up/ffffff",
        type: "challenge",
        title: "JP Morgan Chase",
        text:
            "Our challenge will be the JPMorgan Chase “Best Hack for Social Good"
    }
].map(card => {
    card.key = `card-${card.title}`;
    return card;
});
