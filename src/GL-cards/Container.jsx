import React from 'react';
import { GlobalContent, Assortment, YndexMapsHome, PriseList } from '../GL-cards'
import PageList from '../GL-cards/imp/listv.jpg';



function Container() {

    const list = [
        {
            image: PageList,
            text: 'Доска обрезная 25х100х6000мм ГОСТ/2сорт (естественной влажности)',
            page: PageList,
            price: '197 ₽',
            priceGreen: '196 ₽',
            specifications: 'Характеристики',
            where: 'Где сделано?', whereX: 'Россия',
            length: 'Длина', lengthX: '6м',
            variety: 'Сорт леса', varietyX: 'Вторая',
            thickness: 'Высота', thicknessX: '25мм',
            width: 'Ширина', widthX: '100мм',
            quantity: 'Кол-во', unit: '1 шт',
            volume: 'Кол-во 66 шт', priceСube: '13 000 ₽',

            availability: 'В наличии',
            availabilityFalse: 'Нет в наличие',
        },

        {
            image: PageList,
            text: 'Доска обрезная 25х120х6000мм ГОСТ/2сорт (естественной влажности)',
            page: PageList,
            price: '237 ₽',
            priceGreen: '236 ₽',
            specifications: 'Характеристики',
            where: 'Где сделано?', whereX: 'Россия',
            length: 'Длина', lengthX: '6м',
            variety: 'Сорт леса', varietyX: 'Вторая',
            thickness: 'Высота', thicknessX: '25мм',
            width: 'Ширина', widthX: '120мм',
            quantity: 'Кол-во', unit: '1 шт',
            volume: '55 шт', priceСube: '13 000 ₽',

            availability: 'В наличии',
            availabilityFalse: 'Нет в наличие',
        },

        {
            image: PageList,
            text: 'Доска обрезная 25х150х6000мм ГОСТ/2сорт (естественной влажности)',
            page: PageList,
            price: '290 ₽',
            priceGreen: '289 ₽',
            specifications: 'Характеристики',
            where: 'Где сделано?', whereX: 'Россия',
            length: 'Длина', lengthX: '6м',
            variety: 'Сорт леса', varietyX: 'Вторая',
            thickness: 'Высота', thicknessX: '25мм',
            width: 'Ширина', widthX: '150мм',
            quantity: 'Кол-во', unit: '1 шт',

            availability: 'В наличии',
            availabilityFalse: 'Нет в наличие',
        },

        {
            image: PageList,
            text: 'Доска обрезная 30х120х6000мм ГОСТ/2сорт (естественной влажности)',
            page: PageList,
            price: '335 ₽',
            priceGreen: '334 ₽',
            specifications: 'Характеристики',
            where: 'Где сделано?', whereX: 'Россия',
            length: 'Длина', lengthX: '6м',
            variety: 'Сорт леса', varietyX: 'Вторая',
            thickness: 'Высота', thicknessX: '30мм',
            width: 'Ширина', widthX: '120мм',
            quantity: 'Кол-во', unit: '1 шт',
            volume: '46 шт', priceСube: '15 500 ₽',

            availability: 'В наличии',
            availabilityFalse: 'Нет в наличие',
        },

        {
            image: PageList,
            text: 'Доска обрезная 30х150х6000мм ГОСТ/2сорт (естественной влажности)',
            page: PageList,
            price: '351 ₽',
            priceGreen: '350 ₽',
            specifications: 'Характеристики',
            where: 'Где сделано?', whereX: 'Россия',
            length: 'Длина', lengthX: '6м',
            variety: 'Сорт леса', varietyX: 'Вторая',
            thickness: 'Высота', thicknessX: '30мм',
            width: 'Ширина', widthX: '150мм',
            quantity: 'Кол-во', unit: '1 шт',

            availability: 'В наличии',
            availabilityFalse: 'Нет в наличие',
        },

        {
            image: PageList,
            text: 'Доска обрезная 30х200х6000мм ГОСТ/2сорт (естественной влажности)',
            page: PageList,
            price: '481 ₽',
            priceGreen: '480 ₽',
            specifications: 'Характеристики',
            where: 'Где сделано?', whereX: 'Россия',
            length: 'Длина', lengthX: '6м',
            variety: 'Сорт леса', varietyX: 'Вторая',
            thickness: 'Высота', thicknessX: '30мм',
            width: 'Ширина', widthX: '200мм',
            quantity: 'Кол-во', unit: '1 шт',

            availability: 'В наличии',
            availabilityFalse: 'Нет в наличие',
        },

        {
            image: PageList,
            text: 'Доска обрезная 40х150х6000мм ГОСТ/2сорт (естественной влажности)',
            page: PageList,
            price: '481 ₽',
            priceGreen: '480 ₽',
            specifications: 'Характеристики',
            where: 'Где сделано?', whereX: 'Россия',
            length: 'Длина', lengthX: '6м',
            variety: 'Сорт леса', varietyX: 'Вторая',
            thickness: 'Высота', thicknessX: '40мм',
            width: 'Ширина', widthX: '150мм',
            quantity: 'Кол-во', unit: '1 шт',

            availability: 'В наличии',
            availabilityFalse: 'Нет в наличие',
        },

        {
            image: PageList,
            text: 'Доска обрезная 40х200х6000мм ГОСТ/2сорт (естественной влажности)',
            page: PageList,
            price: '650 ₽',
            priceGreen: '649 ₽',
            specifications: 'Характеристики',
            where: 'Где сделано?', whereX: 'Россия',
            length: 'Длина', lengthX: '6м',
            variety: 'Сорт леса', varietyX: 'Вторая',
            thickness: 'Высота', thicknessX: '25мм',
            width: 'Ширина', widthX: '100мм',
            quantity: 'Кол-во', unit: '1 шт',

            availability: 'В наличии',
            availabilityFalse: 'Нет в наличие',
        },

        {
            image: PageList,
            text: 'Доска обрезная 50х120х6000мм ГОСТ/2сорт (естественной влажности)',
            page: PageList,
            price: '574 ₽',
            priceGreen: '573 ₽',
            specifications: 'Характеристики',
            where: 'Где сделано?', whereX: 'Россия',
            length: 'Длина', lengthX: '6м',
            variety: 'Сорт леса', varietyX: 'Вторая',
            thickness: 'Высота', thicknessX: '50мм',
            width: 'Ширина', widthX: '120мм',
            quantity: 'Кол-во', unit: '1 шт',

            availability: 'В наличии',
            availabilityFalse: 'Нет в наличие',
        },

        {
            image: PageList,
            text: 'Доска обрезная 50х150х6000мм ГОСТ/2сорт (естественной влажности)',
            page: PageList,
            price: '590 ₽',
            priceGreen: '589 ₽',
            specifications: 'Характеристики',
            where: 'Где сделано?', whereX: 'Россия',
            length: 'Длина', lengthX: '6м',
            variety: 'Сорт леса', varietyX: 'Вторая',
            thickness: 'Высота', thicknessX: '50мм',
            width: 'Ширина', widthX: '150мм',
            quantity: 'Кол-во', unit: '1 шт',

            availability: 'В наличии',
            availabilityFalse: 'Нет в наличие',
        },

        {
            image: PageList,
            text: 'Доска обрезная 50х200х6000мм ГОСТ/2сорт (естественной влажности)',
            page: PageList,
            price: '813 ₽',
            priceGreen: '812 ₽',
            specifications: 'Характеристики',
            where: 'Где сделано?', whereX: 'Россия',
            length: 'Длина', lengthX: '6м',
            variety: 'Сорт леса', varietyX: 'Вторая',
            thickness: 'Высота', thicknessX: '50мм',
            width: 'Ширина', widthX: '200мм',
            quantity: 'Кол-во', unit: '1 шт',

            availability: 'В наличии',
            availabilityFalse: 'Нет в наличие',
        }, {
            image: PageList,
            text: 'Доска обрезная 100х100х6000мм ГОСТ/2сорт (естественной влажности)',
            page: PageList,
            price: '970 ₽',
            priceGreen: '969 ₽',
            specifications: 'Характеристики',
            where: 'Где сделано?', whereX: 'Россия',
            length: 'Длина', lengthX: '6м',
            variety: 'Сорт леса', varietyX: 'Вторая',
            thickness: 'Высота', thicknessX: '100мм',
            width: 'Ширина', widthX: '100мм',
            quantity: 'Кол-во', unit: '1 шт',

            availability: 'В наличии',
            availabilityFalse: 'Нет в наличие',
        },

        {
            image: PageList,
            text: 'Доска обрезная 100х150х6000мм ГОСТ/2сорт (естественной влажности)',
            page: PageList,
            price: '1181 ₽',
            priceGreen: '1180 ₽',
            specifications: 'Характеристики',
            where: 'Где сделано?', whereX: 'Россия',
            length: 'Длина', lengthX: '6м',
            variety: 'Сорт леса', varietyX: 'Вторая',
            thickness: 'Высота', thicknessX: '100мм',
            width: 'Ширина', widthX: '150мм',
            quantity: 'Кол-во', unit: '1 шт',

            availability: 'В наличии',
            availabilityFalse: 'Нет в наличие',
        },

        {
            image: PageList,
            text: 'Доска обрезная 100х200х6000мм ГОСТ/2сорт (естественной влажности)',
            page: PageList,
            price: '1625 ₽',
            priceGreen: '1624 ₽',
            specifications: 'Характеристики',
            where: 'Где сделано?', whereX: 'Россия',
            length: 'Длина', lengthX: '6м',
            variety: 'Сорт леса', varietyX: 'Вторая',
            thickness: 'Высота', thicknessX: '100мм',
            width: 'Ширина', widthX: '200мм',
            quantity: 'Кол-во', unit: '1 шт',

            availability: 'В наличии',
            availabilityFalse: 'Нет в наличие',
        },

        {
            image: PageList,
            text: 'Доска обрезная 150х150х6000мм ГОСТ/2сорт (естественной влажности)',
            page: PageList,
            price: '1857 ₽',
            priceGreen: '1856 ₽',
            specifications: 'Характеристики',
            where: 'Где сделано?', whereX: 'Россия',
            length: 'Длина', lengthX: '6м',
            variety: 'Сорт леса', varietyX: 'Вторая',
            thickness: 'Высота', thicknessX: '150мм',
            width: 'Ширина', widthX: '150мм',
            quantity: 'Кол-во', unit: '1 шт',

            availability: 'В наличии',
            availabilityFalse: 'Нет в наличие',
        },
    ]

    return (
        <div>
            <GlobalContent />
            <Assortment list={list} />
            <PriseList />
            <YndexMapsHome />
        </div>
    );
}

export default Container;