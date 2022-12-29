const showList = {
    "show 1": {
        "title": "X",
        "tags": ['Horror', 'Angst'],
        "rating": 4.3,
        "watchCount": 450,
        "publication": "2010/09/03"
    },
    "show 2": {
        "title": "Y",
        "tags": ['Horror', 'Gore'],
        "rating": 3.6,
        "watchCount": 2103,
        "publication": "2017/03/26"
    },
    "show 3": {
        "title": "Z",
        "tags": ['Fantasy', 'Major Character Death'],
        "rating": 3.8,
        "watchCount": 5695,
        "publication": "2003/04/04"
    },
    "show 4": {
        "title": "W",
        "tags": ['Fantasy', 'Romance'],
        "rating": 4.7,
        "watchCount": 1732,
        "publication": "2020/01/12"
    }
}

const tagList = [];
Object.values(showList).forEach(show => {
    tagList.push(show.tags)
})

export default tagList;