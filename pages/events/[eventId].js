import { getEventById, getFeaturedEvents } from "./../../helpers/api-utils";
import EventSummary from "./../../components/event-detail/event-summary";
import EventLogistics from "./../../components/event-detail/event-logistics";
import EventContent from "./../../components/event-detail/event-content";

export default function EventDetailPage({ selectedEvent }) {
  if (!selectedEvent) {
    return (
      <div className="center">
        <p>Loading...</p>
      </div>
    );
  }
  return (
    <>
      <EventSummary title={selectedEvent.title} />
      <EventLogistics
        date={selectedEvent.date}
        address={selectedEvent.location}
        image={selectedEvent.image}
        imageAlt={selectedEvent.title}
      />
      <EventContent>
        <p>{selectedEvent.description}</p>
      </EventContent>
    </>
  );
}

export async function getStaticProps(context) {
  const eventId = context.params.eventId;
  const event = await getEventById(eventId);

  return {
    props: {
      selectedEvent: event,
    },
    revalidate: 30,
  };
}

// We need to add it for next, next needs to understand which pages have to pre-render
export async function getStaticPaths() {
  const events = await getFeaturedEvents();
  const paths = events.map((event) => ({ params: { eventId: event.id } }));
  return {
    paths,
    fallback: "blocking", // Are there any different pages except we have in the array? true - to render data, false - 404 page, 'blocking' - wait untill page will be ready and then show us content
  };
}
