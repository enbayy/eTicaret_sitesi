import React, { useEffect, useState } from 'react';
import Cart from '../../../../components/Cart';
import { axiosInstance } from '../../../../network/axiosInstance';
import { Col, Row } from 'antd';

function HomeForm() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axiosInstance.get('/products')
            .then((res) => setProducts(res.data))
            .catch((err) => console.log(err));
    }, []);

    return (
        <div className="page-container">
            <Row gutter={16}>
                {products.map((e) => (
                    <Col key={e.id} xs={24} sm={12} md={8} lg={6}>
                        <Cart
                            id={e.id}
                            title={e.name}
                            description={e.description}
                            imageSrc={e.image}
                            price={e.price}
                        />
                    </Col>
                ))}
            </Row>
        </div>
    );
}

export default HomeForm;