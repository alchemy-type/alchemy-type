function findById(items, id) {
    for(let i = 0; i < items.length; i++) {
        let item = items[i];
        if(item.id === id) {
            return item;
        }
    }
    return null;
}

export default findById;