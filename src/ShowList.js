const showList = {
    "show 1": {
        "title": "X",
        "tags": ['Horror', 'Angst']
    },
    "show 2": {
        "title": "Y",
        "tags": ['Horror', 'Gore']
    },
    "show 3": {
        "title": "Z",
        "tags": ['Fantasy', 'Major Character Death']
    },
    "show 4": {
        "title": "W",
        "tags": ['Fantasy', 'Romance']
    }
}

const tagList = [];
Object.values(showList).forEach(show => {
    tagList.push(show.tags)
})

export default tagList;