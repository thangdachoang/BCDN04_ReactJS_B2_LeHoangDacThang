import React, { Component } from 'react'
import data from '../dataGlasses.json'
export default class Product extends Component {
    state = {
        price: 30,
        name: "GUCCI G8850U",
        url: "./glassesImage/v1.png",
        desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
    }
    glassList = () => {
        return data.map((glass) => {
            return (<div className="col-2 py-3">
                <button onClick={()=>{
                    this.changeGlass(glass.id)
                }}>
                    <img className="img-fluid" src={glass.url} alt="" />
                </button>
            </div>
            )
        })
    }

    changeGlass = (id) =>{
        let newGlass = data.find((glass)=>{
            return glass.id === id;
        })
        this.setState(newGlass)
    }
    render() {
        return (
            <div className='container glass mt-5'>
                <div className='glass__model d-flex justify-content-evenly'>
                    <div className='model__left position-relative'>
                        <img className='img-fluid' src="./glassesImage/model.jpg" alt />
                        <img className='position-absolute img-fluid' src={this.state.url} alt="" />
                        <div className='infomation position-absolute'>
                            <span>{this.state.name}</span><span> | {this.state.price}$</span>
                            <p>{this.state.desc}</p>
                        </div>
                    </div>
                    <div className='model__right'>
                        <img className='img-fluid' src="./glassesImage/model.jpg" alt />
                    </div>
                </div>
                <div className='my-5'>
                    <div className='row'>{this.glassList()}</div>
                </div>
            </div>
        )
    }
}
