import babiesHaven from '@/assets/babieshavenbd-preview.png';
import BarakahPublication from '@/assets/Barakah-Publication.png';
import hudawayBD from '@/assets/hudaway.png';
import khalifaFashionWorld from '@/assets/Khalif-FashionWorld.png';
import kidsPlaynix from '@/assets/Kids-Playnix.png';
import Qiblaa from '@/assets/image1.png';
import homely from '@/assets/Homely.png';
import solutionBD from '@/assets/image3.png';
import vitalixBD from '@/assets/Vitalix-Ananta.png';
import divineAroma from '@/assets/image4.png';
import royal from '@/assets/royal.png';
import rafaOnline from '@/assets/Screenshot_4.png';
import cargoShipping from '@/assets/Screenshot_5.png';
import bisNogor from '@/assets/1080-bag-ash-890-tk-4.png';
import sakura from '@/assets/Screenshot_6.png';
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import {
    Card,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Search, SquarePen, Trash } from 'lucide-react';
import { Input } from '@/components/ui/input';
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group"


const projects = [
    { name: 'Homely', url: 'https://homely.com.bd', category: 'websites', image: homely },
    { name: 'Kids Playnix', url: 'https://kidzplaynix.com', category: 'websites', image: kidsPlaynix },
    // { name: 'Royal Park', url: 'https://royalparkattire.com/', category: 'websites', image: royal },
    { name: 'Khalifa Fashion World', url: 'https://khalifafashionworld.com', category: 'websites', image: khalifaFashionWorld },
    { name: 'Hudaway BD', url: 'https://hudawaybd.com', category: 'websites', image: hudawayBD },
    { name: 'Divine Aroma BD', url: 'https://divinearomabd.com', category: 'websites', image: divineAroma },
    { name: 'Qiblaa', url: 'https://qiblaa.com', category: 'websites', image: Qiblaa },
    { name: 'Babies Haven BD', url: 'https://babieshavenbd.com', category: 'websites', image: babiesHaven },
    // { name: 'Solution BD', url: 'https://solutionbd.top', category: 'websites', image: solutionBD },
    { name: 'Bismillah Cargo', url: 'https://bismillahcargo.com.bd', category: 'websites', image: cargoShipping },
    { name: 'Rafaa Online', url: 'https://rafaaonline.com', category: 'websites', image: rafaOnline },
    // { name: 'Bismillah Gor', url: 'https://bismillahnogor.com', category: 'websites', image: bisNogor },
    // { name: 'Solution BD Landing', url: 'https://solutionbd.top', category: 'landing-pages', image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop' },
    { name: 'Vitalix BD', url: 'https://vitalixbd.com/vitalix-bd-ananta', category: 'landing-pages', image: vitalixBD },
    // { name: 'Bismillah Nogor Landing', url: 'https://bismillahnogor.com', category: 'landing-pages', image: 'https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?w=400&h=250&fit=crop' },
    // { name: 'Gopali Pitha', url: 'https://gopalipitha.com', category: 'landing-pages', image: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=400&h=250&fit=crop' },
    { name: 'Chandura', url: 'https://chandura.com', category: 'landing-pages', image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=250&fit=crop' },
    // { name: 'Trendy Book BD', url: 'https://trendybookbd.com', category: 'landing-pages', image: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400&h=250&fit=crop' },
    { name: 'Barakah Publication', url: 'https://barakahpublication.shop', category: 'landing-pages', image: BarakahPublication },
    // { name: 'Masud Telecom BD', url: 'https://masudtelecombd.com', category: 'landing-pages', image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=250&fit=crop' },
    { name: 'Sakura Agency', url: 'https://www.sakura.agency', category: 'landing-pages', image: sakura },
    // { name: 'Kids Dream Drape', url: 'https://kids.dreamdrapebd.com', category: 'landing-pages', image: 'https://images.unsplash.com/photo-1596870230751-ebdfce98ec42?w=400&h=250&fit=crop' },
];

const Projects = () => {
    return (
        <div>
            <div className="my-3">
                <h2 className="font-bold text-2xl" >All Projects</h2>
                <div className='flex gap-2 my-3'>
                    <InputGroup className="max-w-xl ">
                        <InputGroupInput placeholder="Search..." />
                        <InputGroupAddon>
                            <Search />
                        </InputGroupAddon>
                        <InputGroupAddon align="inline-end">12 results</InputGroupAddon>
                    </InputGroup>
                    <Button variant='secondary'>Search <Search /> </Button>
                </div>
            </div>

            <br />


            <div className='grid grid-cols-4 gap-4'>
                {
                    projects.map(data => {
                        return (
                            <Card key={data.url} className="relative rounded-2xl mx-auto w-full max-w-sm pt-0">
                                {/* <div className="absolute inset-0 z-30 aspect-video " /> */}
                                <img
                                    src={data.image}
                                    alt="Event cover"
                                    className="relative rounded-bl-none rounded-br rounded-2xl z-20 aspect-video w-full object-cover  "
                                />
                                <div className='absolute z-40 top-1 right-1'>
                                    <AlertDialogDemo />
                                </div>
                                <CardHeader>
                                    <Badge variant="outline" className='w-fit'>{data.category}</Badge>
                                    <CardTitle>Design systems meetup</CardTitle>
                                    <CardDescription>

                                        A practical talk on component APIs, accessibility, and shipping
                                        faster.
                                    </CardDescription>
                                </CardHeader>

                                <CardFooter className='space-x-2'>
                                    <Button className="w-full">View Project</Button>
                                    <Button variant='outline'>
                                        <SquarePen />
                                    </Button>
                                </CardFooter>
                            </Card>
                        )
                    })
                }
            </div>
        </div>
    );
};


export function AlertDialogDemo() {
    return (
        <AlertDialog  >
            <AlertDialogTrigger >
                <Button className='rounded-full w-fit p-3.5 bg-red-600/80' variant='destructive'><Trash /></Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                    <AlertDialogDescription>
                        This action cannot be undone. This will permanently delete your
                        projects from our servers.
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction className='bg-red-600' >Confirm</AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    )
}



export default Projects;