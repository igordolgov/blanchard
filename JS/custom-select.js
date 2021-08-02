const defaultSelect = () => {
    const element = document.querySelector('#selectCustom');
    const choices = new Choices(element, {
        placeholder: false,
        searchEnabled: false,
        shouldSort: false,
        itemSelectText: ""
    });
};
defaultSelect();