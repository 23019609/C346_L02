// ==================== EXERCISE 1 ====================
//
// import React from "react";
// import { Text, View } from "react-native";
//
// const Movie = ({ title, year }) => {
//     return (
//         <View>
//             <Text>
//                 {title} {year}
//             </Text>
//         </View>
//     );
// };
//
// const App = () => {
//     return <Movie title="Doctor Sleep" year={2019} />;
// };
//
// export default App;

// ==================== EXERCISE 2 ====================
//
// import React from "react";
// import { Text, View } from "react-native";
// import Icon from "react-native-vector-icons/FontAwesome6";
//
// const Movie = ({ title, year, icon_name }) => {
//     return (
//         <View>
//             <Text>
//                 {title} {year}
//             </Text>
//             <Icon name={icon_name} size={20} color="#B23B23" />
//         </View>
//     );
// };
//
// const App = () => {
//     return <Movie title="Doctor Sleep" year={2019} icon_name="skull" />;
// };
//
// export default App;

// ==================== EXERCISE 3 ====================
//
// import React from "react";
// import { Text, View, Image } from "react-native";
// import Icon from "react-native-vector-icons/FontAwesome6";
//
// const Movie = ({ title, year, icon_name }) => {
//     return (
//         <View>
//             <Image
//                 source={require("./img/doctor-sleep.jpg")}
//                 style={{ width: 400, height: 500 }}
//             />
//             <Text>
//                 {title} {year}
//             </Text>
//             <Icon name={icon_name} size={20} color="#B23B23" />
//         </View>
//     );
// };
//
// const App = () => {
//     return <Movie title="Doctor Sleep" year={2019} icon_name="skull" />;
// };
//
// export default App;

// ==================== EXERCISE 4 ====================
//
// import React from "react";
// import { Text, View, Image } from "react-native";
// import Icon from "react-native-vector-icons/FontAwesome6";
//
// const Movie = ({ title, year, icon_name, poster }) => {
//     return (
//         <View>
//             <Image source={poster} style={{ width: 400, height: 500 }} />
//             <Text>
//                 {title} {year}
//             </Text>
//             <Icon name={icon_name} size={20} color="#B23B23" />
//         </View>
//     );
// };
//
// const App = () => {
//     return (
//         <Movie
//             title="Doctor Sleep"
//             year={2019}
//             icon_name="skull"
//             poster={require("./img/doctor-sleep.jpg")}
//         />
//     );
// };
//
// export default App;

// ==================== EXERCISE 5 ====================
//
// import React from "react";
// import { Text, View, Image } from "react-native";
// import Icon from "react-native-vector-icons/FontAwesome6";
//
// const Movie = ({ title, year, icon_name, poster }) => {
//     return (
//         <View>
//             <Image source={poster} style={{ width: 400, height: 500 }} />
//             <Text>
//                 {title} {year}
//             </Text>
//             <Icon name={icon_name} size={20} color="#B23B23" />
//         </View>
//     );
// };
//
// const AllMovies = () => {
//     return (
//         <View>
//             <Movie
//                 title="Doctor Sleep"
//                 year={2019}
//                 icon_name="skull"
//                 poster={require("./img/doctor-sleep.jpg")}
//             />
//             <Movie
//                 title="Midway"
//                 year={2020}
//                 icon_name="person-rifle"
//                 poster={require("./img/midway.jpg")}
//             />
//         </View>
//     );
// };
//
// const App = () => {
//     return <AllMovies />;
// };
//
// export default App;

// ==================== EXERCISE 6 ====================
//
// import React from "react";
// import { Text, View, Image, ScrollView } from "react-native";
// import Icon from "react-native-vector-icons/FontAwesome6";
//
// const Movie = ({ title, year, icon_name, poster }) => {
//     return (
//         <View>
//             <Image source={poster} style={{ width: 400, height: 500 }} />
//             <Text>
//                 {title} {year}
//             </Text>
//             <Icon name={icon_name} size={20} color="#B23B23" />
//         </View>
//     );
// };
//
// const AllMovies = () => {
//     return (
//         <ScrollView>
//             <Movie
//                 title="Doctor Sleep"
//                 year={2019}
//                 icon_name="skull"
//                 poster={require("./img/doctor-sleep.jpg")}
//             />
//             <Movie
//                 title="Midway"
//                 year={2020}
//                 icon_name="person-rifle"
//                 poster={require("./img/midway.jpg")}
//             />
//         </ScrollView>
//     );
// };
//
// const App = () => {
//     return <AllMovies />;
// };
//
// export default App;

// ==================== EXERCISE 7 ====================

import React from "react";
import { ScrollView, Text } from "react-native";
import Boat from "./components/Boats";

const BoatList = [
    {
        name: "Sea Ray 500 Sundancer",
        description:
            "Contoured lines and dramatic styling reveal a refined and powerful presence that will take your breath away.",
        picture: require("./img/sea_ray.jpg"),
    },
    {
        name: "Four Winns Horizon 180",
        description:
            "A sporty look and refined details truly set the Horizon 180 above all others.",
        picture: require("./img/four_winns.jpg"),
    },
    {
        name: "Flipper 640 ST",
        description:
            "A modern take on the classic, traditional hardtop and perfect for a family picnic.",
        picture: require("./img/flipper.jpg"),
    },
    {
        name: "Princess V48",
        description:
            "There is the option for an open design with a full-length cockpit and sunroof, or the enclosed deck saloon model, available with the option of a climate controlled interior.",
        picture: require("./img/princess.jpg"),
    },
    {
        name: "Bayliner 175 Bowrider",
        description:
            "Its outboard power gives you increased cockpit space and quiet, fuel-efficient performance.",
        picture: require("./img/bayliner.jpg"),
    },
    {
        name: "Fairline Targa 47",
        description:
            "Stretch out on the large sun bed aft while friends lounge in the generously appointed cockpit.",
        picture: require("./img/fairline.jpg"),
    },
];

const App = () => {
    return (
        <ScrollView style={{ margin: 20, marginTop: 50 }}>
            <Text
                style={{
                    alignSelf: "center",
                    fontWeight: 800,
                    color: "grey",
                    fontSize: 15,
                }}
            >
                GetABoat - For Sale
            </Text>

            {/*<Boat name="Sea Ray 500 Sundancer" description="Contoured lines and dramatic styling reveal a refined and powerful presence that will take your breath away." picture="sea_ray.jpg" />*/}
            {/*<Boat name="Four Winns Horizon 180" description="A sporty look and refined details truly set the Horizon 180 above all others." picture="four_winns.jpg" />*/}
            {/*<Boat name="Flipper 640 ST" description="A modern take on the classic, traditional hardtop and perfect for a family picnic." picture="flipper.jpg" />*/}
            {/*<Boat name="Princess V48" description="There is the option for an open design with a full-length cockpit and sunroof, or the enclosed deck saloon model, available with the option of a climate controlled interior." picture="princess.jpg" />*/}
            {/*<Boat name="Bayliner 175 Bowrider" description="Its outboard power gives you increased cockpit space and quiet, fuel-efficient performance." picture="bayliner.jpg" />*/}
            {/*<Boat name="Fairline Targa 47" description="Stretch out on the large sun bed aft while friends lounge in the generously appointed cockpit." picture="fairline.jpg" />*/}

            {BoatList.map((boat, i) => (
                <Boat
                    key={"boat_" + i}
                    name={boat.name}
                    description={boat.description}
                    picture={boat.picture}
                />
            ))}
        </ScrollView>
    );
};

export default App;
