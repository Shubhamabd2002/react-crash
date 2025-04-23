function customRender(reactElement, container) {
    const domEle = document.createElement(reactElement.type)
    domEle.innerHTML = reactElement.children
    for (const key in reactElement.props) {
        if (key === 'children') continue;
        domEle.setAttribute(key, reactElement.props[key])
    }
    container.appendChild(domEle)
}
const reactComponent = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'Click me to visit google'
}

const mainContainer = document.getElementById('root')
customRender(reactComponent, mainContainer)