const plugin = {
    noteOption: {
        /**
         * @param {any} app 
         * @param {String} noteUUID 
         * @returns {null}
         */
        "Get note link": async function (app, noteUUID) {
            try {
                const noteURL = await app.getNoteURL({ uuid: noteUUID });

                //Write text into clipboard
                navigator.clipboard.writeText(noteURL);
                console.log("Note URL copied:" + noteURL);
            } catch (error) {
                console.log(error);
                app.alert(error);
            }
        }
    }
}

export default plugin;