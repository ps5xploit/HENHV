// @ts-check
const CUSTOM_ACTION_APPCACHE_REMOVE = "appcache-remove";
/**
 * @typedef {Object} PayloadInfo
 * @property {string} displayTitle
 * @property {string} description
 * @property {string} fileName - path relative to the payloads folder
 * @property {string} author
 * @property {string} projectSource
 * @property {string} binarySource - should be direct download link to the included version, so that you can verify the hashes
 * @property {string} version
 * @property {string[]?} [supportedFirmwares] - optional, these are interpreted as prefixes, so "" would match all, and "4." would match 4.xx, if not set, the payload is assumed to be compatible with all firmwares
 * @property {number?} [toPort] - optional, if the payload should be sent to "127.0.0.1:<port>" instead of loading directly, if specified it'll show up in webkit-only mode too
 * @property {string?} [customAction]
 */
/**
 * @type {PayloadInfo[]}
*/
const payload_map = [
    // { // auto-loaded
    //     displayTitle: "PS5 Payload ELF Loader",
    //     description: "Uses port 9021. Persistent network elf loader",
    //     fileName: "elfldr.elf",
    //     author: "john-tornblom",
    //     projectSource: "https://github.com/ps5-payload-dev/elfldr",
    //     binarySource: "https://github.com/ps5-payload-dev/elfldr/releases/download/v0.19/Payload.zip",
    //     version: "0.19",
    //     supportedFirmwares: ["1.", "2.", "3.", "4.", "5."]
    // },
    {
        displayTitle: "ps5-hen",
        description: "AIO HEN",
        fileName: "ps5-hen.elf",
        author: "ps5-hen",
        projectSource: "ps5-hen",
        binarySource: "ps5-hen",
        version: "1.3",
        supportedFirmwares: ["1.", "2.", "3.", "4."],
    },
    // { // auto-loaded
    //     displayTitle: "ftp1-15",
    //     description: "ftp1-15",
    //     fileName: "ftp1-15.elf",
    //     author: "ftp1-15",
    //     projectSource: "ftp1-15",
    //     binarySource: "ftp1-15",
    //     version: "1.15",
    //     supportedFirmwares: ["1.", "2.", "3.", "4.", "5."]
    // },

    // {
    //     // https://github.com/Storm21CH/PS5_Browser_appCache_remove
    //     displayTitle: "Browser appcache remover",
    //     description: "Deletes for only the current user in webkit-only mode",
    //     fileName: "",
    //     author: "Storm21CH, idlesauce",
    //     projectSource: "",
    //     binarySource: "",
    //     version: "1.0",
    //     customAction: CUSTOM_ACTION_APPCACHE_REMOVE
    // }
];