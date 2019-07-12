import React, { Component } from "react";
import EventCard from "../../utils/EventCard";
import img from "../../../assets/images/carousel11.jpg";
import { connect } from "react-redux";
import { getAllEvents } from "../../../actions/eventActions";
import isEmpty from "../../../validation/is-empty";
import Spinner from "../../adminPage/utils/Spinner";

class AllEvents extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    img: "566x566",
                    title: "You know how edey be na",
                    desc:
                        "lorem jjdj smsmj sjjja maMM  dkkd kKA kdk ksks keke sisksnf skk lorem jjdj smsmj sjjja maMM  dkkd kKA kdk ksks keke sisksnf skk"
                },
                {
                    img: "565x565",
                    title: "You know how edey be na",
                    desc:
                        "lorem jjdj smsmj sjjja maMM  dkkd kKA kdk ksks keke sisksnf skk lorem jjdj smsmj sjjja maMM  dkkd kKA kdk ksks keke sisksnf skk"
                },
                {
                    img: "564x564",
                    title: "You know how edey be na",
                    desc:
                        "lorem jjdj smsmj sjjja maMM  dkkd kKA kdk ksks keke sisksnf skk lorem jjdj smsmj sjjja maMM  dkkd kKA kdk ksks keke sisksnf skk"
                },
                {
                    img: "563x563",
                    title: "You know how edey be na",
                    desc:
                        "lorem jjdj smsmj sjjja maMM  dkkd kKA kdk ksks keke sisksnf skk lorem jjdj smsmj sjjja maMM  dkkd kKA kdk ksks keke sisksnf skk"
                },
                {
                    img: "567x567",
                    title: "You know how edey be na",
                    desc:
                        "lorem jjdj smsmj sjjja maMM  dkkd kKA kdk ksks keke sisksnf skk lorem jjdj smsmj sjjja maMM  dkkd kKA kdk ksks keke sisksnf skk"
                },
                {
                    img: "568x568",
                    title: "You know how edey be na",
                    desc:
                        "lorem jjdj smsmj sjjja maMM  dkkd kKA kdk ksks keke sisksnf skk lorem jjdj smsmj sjjja maMM  dkkd kKA kdk ksks keke sisksnf skk"
                },
                {
                    img: "561x561",
                    title: "You know how edey be na",
                    desc:
                        "lorem jjdj smsmj sjjja maMM  dkkd kKA kdk ksks keke sisksnf skk lorem jjdj smsmj sjjja maMM  dkkd kKA kdk ksks keke sisksnf skk"
                },
                {
                    img: "562x562",
                    title: "You know how edey be na",
                    desc:
                        "lorem jjdj smsmj sjjja maMM  dkkd kKA kdk ksks keke sisksnf skk lorem jjdj smsmj sjjja maMM  dkkd kKA kdk ksks keke sisksnf skk"
                },
                {
                    img: "569x569",
                    title: "You know how edey be na",
                    desc:
                        "lorem jjdj smsmj sjjja maMM  dkkd kKA kdk ksks keke sisksnf skk lorem jjdj smsmj sjjja maMM  dkkd kKA kdk ksks keke sisksnf skk"
                }
            ]
        };
    }

    componentDidMount() {
        this.props.getAllEvents();
    }
    render() {
        const { events, loading } = this.props.events;

        let items = <Spinner />;
        if (!isEmpty(events) && !loading) {
            items = events.map((item, i) => (
                <EventCard
                    key={i}
                    img={`/api/events/event/${item._id}/image`}
                    title={item.title}
                    desc={item.details}
                />
            ));
        }

        return (
            <section className="section-events">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className="d-flex flex-row events-items align-items-center justify-content-between flex-wrap">
                                {items}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

const mapStateToProps = state => ({
    events: state.events
});

export default connect(
    mapStateToProps,
    { getAllEvents }
)(AllEvents);
