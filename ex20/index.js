document.addEventListener('DOMContentLoaded', () => {
    const contentContainer = document.getElementsByClassName('menu-content')[0]
    const menuChildren = [...document.getElementsByClassName('menu')[0].children]
    const [{children: [...radioAndLabelsList]}] = menuChildren
    const radioList = radioAndLabelsList.filter((element) => element.type === 'radio')
    const contentList = radioAndLabelsList.filter((element) => element.className === 'content')

    radioList.forEach((radio, index) => {
        const hiddenContent = contentList[index]
        radio.addEventListener('click', () => {
            if (radio.checked) {
                contentContainer.innerHTML = hiddenContent.innerHTML
            }
        })
    });
    
})