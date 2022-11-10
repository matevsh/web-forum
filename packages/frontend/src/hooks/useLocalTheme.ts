const useLocalTheme = () => {
    return {
        save: (theme: boolean) => {
            localStorage.setItem('theme', JSON.stringify(theme));
        },
        load: () => {
            const data = localStorage.getItem('theme');
            return data ? JSON.parse(data) : null;
        },
    };
};

export default useLocalTheme;
