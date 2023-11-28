function ImageItem({image}) {
    return <div className="imageList">
       <img src={image.urls.small} alt={image.alt_description} /> 
    </div> ;
}

export default ImageItem;