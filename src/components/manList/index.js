import React from "react";
import ChildHeader from "../childHeader";
import { ManGoodsCss } from "./styled"

class ManGoods extends React.Component {
    constructor() {
        super()
    }
    render() {
        let { manProduct } = this.props;
        console.log(manProduct)
        return (
            <ManGoodsCss>
                < ChildHeader />
                {
                    manProduct.map((item, index) => (
                        <div className="doubleRowList" key={index}>
                            {
                                item.data.map((child, idx) => (
                                    <div className="module-item" key={idx}>
                                        <a href="#">
                                            <img src={child.image} />
                                            <dl>
                                                <dt className="price"><span>￥</span><span>{child.priceStr}</span></dt>
                                                <dd className="labels"><span>一起拼</span></dd>
                                                <dd className="escp module-subtitle">{child.subtitle.split("|")[0]}</dd>
                                                <dd className="escp module-title">{child.mainTitle}</dd>
                                                <dd className="last-line"><span className="comment">{child.thirdContent}</span></dd>
                                            </dl>
                                        </a>
                                    </div>
                                ))
                            }
                        </div>
                    ))
                }
                <div className="doubleRowList">
                    <div className="module-item">
                        <a href="#">
                            <img src="https://bfs.biyao.com/group1/M00/92/0A/rBACYV2JYHWABKNZAANtX768HVY201_360x360.jpg" />
                            <dl>
                                <dt className="price"><span>￥</span><span>259</span></dt>
                                <dd className="labels"><span>一起拼</span></dd>
                                <dd className="escp module-subtitle">Mackage制造商</dd>
                                <dd className="escp module-title">美丽诺羊毛高领毛衫</dd>
                                <dd className="last-line"><span className="comment">271条好评</span></dd>
                            </dl>
                        </a>
                    </div>
                </div>
            </ManGoodsCss>
        )
    }
}

export default ManGoods;