function Item({ src }) {
    return (
        <div className="item_blog">
            <h3 className="item-title">Lorem ipsum dolor sit amet</h3>
            <div>
                <img src={src} alt="icon" className="item-logo"></img>
                <p className="item-content">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non dui sodales, faucibus libero ut, posuere felis. Donec imperdiet suscipit accumsan. Aenean consequat condimentum velit ut tempor. Nam porta massa in metus bibendum congue. Pellentesque ultrices liquam egestas nunc at ullamcorper ultricies. Donec feugiat velit nulla, vel sodales est ullamcorper id. Aenean consequat condimentum velit ut tempor. Nam porta massa in metus bibendum congue. Pellentesque ultrices vestibulum mattis.
                </p>
            </div>
        </div>
    );
}

export default Item;