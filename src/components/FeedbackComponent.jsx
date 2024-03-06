import { Rating } from "flowbite-react";
import { Card } from "flowbite-react";

const FeedbackComponent = () => {
  return (
    <div className="grid grid-cols-1 gap-6 my-10 container mx-auto mt-20">
      <div className="grid lg:grid-cols-2 gap-4">
        <Card
          className="max-w-sm"
          imgSrc="https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg"
          horizontal
        >
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Alexandra
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            Recently got the latest smartphone - amazing camera quality,
            lightning-fast speed, and the sleek design is a head-turner.
            Definitely worth the upgrade!
          </p>
          <Rating>
            <Rating.Star />
            <Rating.Star />
            <Rating.Star />
            <Rating.Star />
            <Rating.Star />
            <p className="ml-2 text-sm font-medium text-gray-500 dark:text-gray-400">
              5 out of 5
            </p>
          </Rating>
        </Card>

        <Card
          className="max-w-sm"
          imgSrc="https://www.fuersie.de/sites/default/files/styles/amp_image_ratio_4x3/public/2022-06/egozentrische-person.jpg?h=fa6d1f7a&itok=BQ97S2w-"
          horizontal
        >
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Benjamin
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            Absolutely loving the smart thermostat! Easy to control from my
            phone, saves energy, and keeps my home at the perfect temperature. A
            game-changer for comfort and efficiency!
          </p>
          <Rating>
            <Rating.Star />
            <Rating.Star />
            <Rating.Star />
            <Rating.Star />
            <Rating.Star filled={false} />
            <p className="ml-2 text-sm font-medium text-gray-500 dark:text-gray-400">
              4 out of 5
            </p>
          </Rating>
        </Card>

        <Card
          className="max-w-sm"
          imgSrc="https://cdn2.psychologytoday.com/assets/styles/manual_crop_1_91_1_1528x800/public/field_blog_entry_images/2018-09/shutterstock_648907024.jpg?itok=7lrLYx-B"
          horizontal
        >
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Sophia
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            Impressed with the performance and comfort of my new wireless
            headphones. Clear sound, great battery life, and the sleek design is
            a bonus
          </p>
          <Rating>
            <Rating.Star />
            <Rating.Star />
            <Rating.Star />
            <Rating.Star filled={false} />
            <Rating.Star filled={false} />
            <p className="ml-2 text-sm font-medium text-gray-500 dark:text-gray-400">
              3 out of 5
            </p>
          </Rating>
        </Card>

        <Card
          className="max-w-sm"
          imgSrc="https://www.tu-ilmenau.de/unionline/fileadmin/_processed_/0/0/csm_Person_Yury_Prof_Foto_AnLI_Footgrafie__2_.JPG_94f12fbf25.jpg"
          horizontal
        >
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Elijah
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            Love my new Apple Watch Series 7! Stylish design, vibrant display,
            and fantastic fitness features. Highly recommended!
          </p>
          <Rating>
            <Rating.Star />
            <Rating.Star />
            <Rating.Star />
            <Rating.Star />
            <Rating.Star />
            <p className="ml-2 text-sm font-medium text-gray-500 dark:text-gray-400">
              5 out of 5
            </p>
          </Rating>
        </Card>
      </div>

      <div className="my-4">
        <Rating className="mb-2">
          <Rating.Star />
          <Rating.Star />
          <Rating.Star />
          <Rating.Star />
          <Rating.Star filled={false} />
          <p className="ml-2 text-sm font-medium text-gray-500 dark:text-gray-400">
            4.95 out of 5
          </p>
        </Rating>
        <p className="mb-4 text-sm font-medium text-gray-500 dark:text-gray-400">
          1,745 global ratings
        </p>
        <Rating.Advanced percentFilled={70} className="mb-2">
          5 star
        </Rating.Advanced>
        <Rating.Advanced percentFilled={17} className="mb-2">
          4 star
        </Rating.Advanced>
        <Rating.Advanced percentFilled={8} className="mb-2">
          3 star
        </Rating.Advanced>
        <Rating.Advanced percentFilled={4} className="mb-2">
          2 star
        </Rating.Advanced>
        <Rating.Advanced percentFilled={1}>1 star</Rating.Advanced>
      </div>
    </div>
  );
};

export default FeedbackComponent;
