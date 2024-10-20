import { getAttractionTrending } from "@/api/api-attractions";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import ItemCard from "../../components/item-component";
import { cn } from "@/lib/utils";
import { AttractionData } from "@/constants";
const fechData = async () => {
  const data = await getAttractionTrending();
  return data.data;
};
const ListTrendingTour = async () => {
  const data = await fechData();
  return (
    <div className={cn("w-full")}>
      <h2 className="text-large font-bold">Tour nổi bật của chúng tôi</h2>
      <div className="">
        <p className="text-black_sub text-small mb-1">
          Khám phá các điểm đến hàng đầu theo cách bạn thich tại Việt Nam chúng
          tôi
        </p>
        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full "
        >
          <CarouselContent>
            {data?.map((tour: AttractionData) => (
              <CarouselItem
                key={tour.slug}
                className="sm:basis-1/2 md:basis-1/3 lg:basis-1/4"
              >
                <ItemCard
                  route="attractions"
                  slug={tour.slug}
                  name={tour.name}
                  images={tour.images[0]}
                  location={tour.location.detail}
                  price={tour.price[0]}
                  rating={tour.rating}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="w-14 h-14 left-2 bg-bg_primary_blue_sub border-none text-white" />
          <CarouselNext className="w-14 h-14 right-2 bg-bg_primary_blue_sub border-none text-white" />
        </Carousel>
      </div>
    </div>
  );
};

export default ListTrendingTour;
