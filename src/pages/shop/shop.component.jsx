import React from 'react';
import SHOP_DATA from'./shop.data'
import './shop.styles.scss';
import PreviewCollection from '../../components/preview-collection.component/preview-collection'
class ShopPage extends React.Component{
    constructor(){
        super()

        this.state={
            collections: SHOP_DATA
        }
    }
        
    render(){
        const {collections} = this.state;
        return (<div className='shop-page'>
            {
                collections.map(({id,...otherCollectionProps}) =>(
                    <PreviewCollection key={id} {...otherCollectionProps}/>
                ))
            }
        </div>)
    }
}

export default ShopPage