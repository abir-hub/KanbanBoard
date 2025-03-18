import initialData from "../data/initial-data";

const contentFetchData = async () => {
    try {
        const response = initialData;
        return response;
    } catch (error) {
        console.error("Error fetching data:", error);
    }
};

export { contentFetchData };