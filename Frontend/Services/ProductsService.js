import { getArticles } from '../features/articleSlice';
import { useDispatch, useSelector } from "react-redux";

// const PRODUCTS = [
//     {
//         id: 100,
//         name: 'ReactProX Headset',
//         price: 350,
//         image: require('../assets/images/headset-100.jpg'),
//         description: 'A headset combines a headphone with microphone. Headsets are made with either a single-earpiece (mono) or a double-earpiece (mono to both ears or stereo).'
//     },
//     {
//         id: 101,
//         name: 'FastLane Toy Car',
//         price: 600,
//         image: require('../assets/images/car-101.jpg'),
//         description: 'A model car, or toy car, is a miniature representation of an automobile. Other miniature motor vehicles, such as trucks, buses, or even ATVs, etc. are often included in this general category.'
//     },
//     {
//         id: 102,
//         name: 'SweetHome Cupcake',
//         price: 2,
//         image: require('../assets/images/cake-102.jpg'),
//         description: 'A cupcake (also British English: fairy cake; Hiberno-English: bun; Australian English: fairy cake or patty cake[1]) is a small cake designed to serve one person.'
//     }
// ];


// export function getProducts() {
//     const { articles } = useSelector((state) => state.articles);

//     useEffect(() => {
//         dispatch(getArticles());

//     }, [dispatch]);
//     return articles;
// }


// export function getProduct(id) {

//     const { article } = useSelector((state) => state.article);
//     useEffect(() => {

//         dispatch(findArticleByID(id))
//     }, [dispatch]);

//     return article
// }

export function getProducts() {
    const { articles } = useSelector((state) => state.articles);

    return articles;
}
export function getProduct(id) {
    const { articles } = useSelector((state) => state.articles);

    return articles.find((article) => (article._id == id));
}
