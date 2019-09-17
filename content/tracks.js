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
    // "Accessibility and visual appeal are vital attributes of any app or website’s user interface. While still remaining functional on the back end, many apps and websites on many different platforms have deplorable user interfaces that needs lots of work.  This year’s HackRice “reDesign” track hopes to improve those interfaces.  Using your knowledge of design and graphics, you will be tasked with redesigning the user interface of an app or website used by the public today that you believe needs overhaul"
    //     icon: "https://icon.now.sh/chevron/ffffff",
    //     type: "challenge",
    //     title: "Chevron",
    //     href: "../static/files/chevron.xlsx",
    //     text:
    //         "Optimize the work order process in Chevrons complex process facilities (refineries and liquified natural gas production facilities).  The idea is to optimize work order completions by having a system that tracks (1) the orders that are submitted and (2) the workers that are completing them (including any necessary certifications / qualifications) to optimize how they are assigned and completed."
    // },
    // {
    //     icon: "https://icon.now.sh/local_gas_station/ffffff",
    //     type: "challenge",
    //     title: "Schlumberger",
    //     href: "https://github.com/Schlumberger/hackathon/",
    //     text:
    //         "Ask an engineer how to improve an application, and they will likely say, 'give me a way to see more data'. Surveillance engineers may analyze output from a dozen or more sensors in the same visualization.​ Line charts are the default choice for this workflow, but they are cumbersome, especially if the data streams have different scaling and units. And as IIoT becomes pervasive at the wellsite, this problem will only grow.​ Show us how to do it better! Deliver a web application to display/query/analyze time-series data from downhole equipment in innovative ways.​​"
    // },
    // {
    //     icon: "https://icon.now.sh/poll/ffffff",
    //     type: "challenge",
    //     title: "HBK",
    //     text:
    //         "The winner of this project will demonstrate the best use of technology for a financially driven problem."
    // },
    // {
    //     icon: "https://icon.now.sh/microsoft/ffffff",
    //     type: "challenge",
    //     title: "Microsoft",
    //     text: (
    //         <p>
    //             The winner of this challenge will best use Microsoft Azure in a way that
    //             empowers individuals or groups to achieve more. Find free trials and
    //             credits <a href="https://azure.microsoft.com/en-us/free/">here</a>.
    //         </p>
    //     )
    // },
    // {
    //     icon: "https://icon.now.sh/facebook/ffffff",
    //     type: "challenge",
    //     title: "Facebook",
    //     text: (
    //         <p>
    //             Facebook will award a prize to the team that makes the best game using
    //             the Facebook Instant Games SDK. The game is expected to run on
    //             Messenger. Judges will be looking for engagement, quality, and
    //             completeness in the hack. The winning team will be invited to
    //             participate in Facebook's Global Hackathon in Menlo Park, CA. For
    //             details, see{" "}
    //             <a href="https://developers.facebook.com/docs/games/instant-games/">
    //                 Instant Games Documentation
    //             </a>. Only the{" "}
    //             <a href="https://fb.gg/igengines">Game Engines listed on this page</a>{" "}
    //             are compatible with Instant Games.
    //         </p>
    //     )
    // },
    // {
    //     icon: "https://icon.now.sh/web/ffffff",
    //     type: "challenge",
    //     href:
    //         "https://docs.google.com/document/d/1yKpxWSMUDDJjBQIiDxlCc3Fta7OwZ9GbHRpQ0fC1y_U/edit?usp=sharing",
    //     title: ".TECH",
    //     text:
    //         "Feature your cool hackathon project on your free .tech domain name. Make sure to make your full .tech domain your official team name and mention the URL while submitting your project! Click through for more details."
    // },
    // {
    //     icon: "https://icon.now.sh/domain/ffffff",
    //     type: "challenge",
    //     href: "http://api.reimaginebanking.com/",
    //     title: "Capital One",
    //     text:
    //         "The winner of this challenge will best answer the following question: how will you reimagine banking? Each member of the winning team will receive a $250 gift card."
    // },
    // {
    //     icon: "https://icon.now.sh/merge_type/ffffff",
    //     type: "challenge",
    //     title: "Indeed",
    //     text:
    //         "We would like to see innovative projects and solutions that tackle societal problems. This could be anything from connecting unemployed jobseekers to jobs to linking hurricane victims to disaster relief resources."
    // },
    // {
    //     icon: "https://icon.now.sh/report_problem/ffffff",
    //     type: "challenge",
    //     title: "JP Morgan Chase",
    //     href: "../static/files/jpmorgan.pdf",
    //     text:
    //         "We challenge you to create a web or mobile application that would either promote financial literacy for individuals (college students, unbanked adults, small businesses, etc) on or provide financial advisory/education on derivatives, futures trading, or how to invest to companies. In addition to providing gamified, guided learning, the application should present users with interactive scenarios. Click through for more details about this challenge."
    // },
    // {
    //     icon: "https://icon.now.sh/report_problem/ffffff",
    //     type: "challenge",
    //     title: "LILIE Center Challenge",
    //     text:
    //         "The winner of this challenge will best answer the following question: how might we end homelessness in Houston, Texas?"
    // }
].map(card => {
    card.key = `card-${card.title}`;
    return card;
});
