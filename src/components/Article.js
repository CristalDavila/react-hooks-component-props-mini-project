import React from "react";

//this part is not working out for me, played around with solutions from GitHub but had no luck.

function makeEmojiList(minutes) {
    const interval = 5
    const emoji = "☕️"
    let emojis = "";


    if (minutes >= 30) {
        interval = 10;
        emoji = "🍱";

    }
    for (let i = 0; i < minutes; i += interval) {
        emojis += emoji;
    }
    return emojis;
}

function Article({ minutes, title, preview, date = "January 1, 1970",}) {
    const emojis = makeEmojiList (minutes);
    return (
        <article>
            <h3>{title}</h3>
            <small>
            {date} {emojis}{minutes} min read
            </small>
                <p>{preview}</p>
            
        </article>
    );
}

export default Article;