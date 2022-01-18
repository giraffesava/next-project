import EventItem from "./event-item";

export default function EventList(props) {
  const { items } = props;
  return (
    <ul>
      {items.map((event) => (
        <EventItem
          key={event.id}
          title={event.title}
          id={event.id}
          date={event.date}
          location={event.location}
          image={event.image}
        />
      ))}
    </ul>
  );
}
