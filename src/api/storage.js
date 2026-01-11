export const createStorage = (key, storage = localStorage) => ({
    setItem(data) {
        storage.setItem(key, JSON.stringify(data));
    },

    getItem() {
        return JSON.parse(storage.getItem(key));
    },
});

export const storage = createStorage();
