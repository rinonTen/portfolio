import React from 'react';
import { About } from '../components';

export default function AboutContainer() {
    return(
        <About>
            <About.Heading>A brief history about me</About.Heading>
            <About.Article>
                <About.SubHeading>From farm to functions</About.SubHeading>
                <About.Text>
                    I come from a small town called Vodiriana in Moramanga's district in the center of Madagascar. Currently, I am living in Mahanoro, which is a peaceful town on the east cost of Madagascar, where <a href="https://onja.org/">Onja</a> is located.
                    Growing up in a hard working family that earns their living from agriculture and selling the products in the market, I became accustomed to rural life in Madagascar which hasn't changed much in the last centuries.
                    I finished high school in 2016 at the age of 18, but then started wondering what to do next: 
                </About.Text>
                <About.Text>
                    I had the ambition to go on to study tourism at university but, like many other graduates, I couldn't afford it. 
                    As most people in my hometown do, I had to work as a farmer dispite the education and skills that I had gained from school. It is not easy to earn a living from agriculture: Imagine bearing the hot weather or rain the whole day while relying on physical labour in the abscence of modern machinery.
                    While I enjoyed it, I chose to leave my village in 2017 in order to look for a different life by working in a small company in the city. However, I was split between the job and supporting my family with their studies which resulted in me having to quit my job.
                </About.Text>
                <About.Text>
                    While wondering what to do next, I received a letter from <a href="https://onja.org/">Onja</a> to take a test mostly about maths to be part of the first class of students studying English and coding over a period of two years.
                    When I passed it, I took part in the next step of the admission process which was a leadership camp at the school location which I passed successfully. Before coming to the school, I had never spoken English or used a computer but now, I can have smooth conversations with any English speaker and I can build a lot of web projects with the technologies that I have learnt. My daily life has certainly been hectic and packed as we learn six days a week, but enjoyable as well due the tide relationships I have with the other students and teachers.
                </About.Text>
                <About.Text> 
                     I want to use this unique opportunity to both develop great products that solve demanding problems and support the development of Madagascar which I see as a country with huge pontential.
                </About.Text>
            </About.Article>
        </About>
    )
}