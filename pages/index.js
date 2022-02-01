import Head from "next/head";
import EventList from "../components/events/event-list";
import { getFeaturedEvents } from "./../helpers/api-utils";
export default function HomePage({ events }) {
  return (
    <>
      <Head>
        <title>Events</title>
        <meta
          name="description"
          content="Find a lot of great events that allow you to evolve"
        />
      </Head>

      <EventList items={events} />
    </>
  );
}

export async function getStaticProps() {
  const featuredEvents = await getFeaturedEvents();
  return {
    props: {
      events: featuredEvents,
    },
    // we don't need to every request re-rendering our page(thats why i don't use getServerSideProps),
    //so we can set up revalidate, 1800 - 30 minutes. Every 30 minutes it will re-render on the backend
    revalidate: 1800,
  };
}
