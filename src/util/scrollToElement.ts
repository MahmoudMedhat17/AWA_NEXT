const scrollToElement = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
        const topOffset = element.getBoundingClientRect().top + window.pageYOffset;
        window.scrollTo({ top: topOffset, behavior: "smooth" });
    }
};

export default scrollToElement;