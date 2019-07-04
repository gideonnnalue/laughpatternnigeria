import React, { Component } from 'react';
import EventCard from '../../utils/EventCard';
import img from '../../../assets/images/carousel11.jpg';

class AllEvents extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [
            {img: "566x566", title: "You know how edey be na", desc: "lorem jjdj smsmj sjjja maMM  dkkd kKA kdk ksks keke sisksnf skk lorem jjdj smsmj sjjja maMM  dkkd kKA kdk ksks keke sisksnf skk"},
            {img: "565x565", title: "You know how edey be na", desc: "lorem jjdj smsmj sjjja maMM  dkkd kKA kdk ksks keke sisksnf skk lorem jjdj smsmj sjjja maMM  dkkd kKA kdk ksks keke sisksnf skk"},
            {img: "564x564", title: "You know how edey be na", desc: "lorem jjdj smsmj sjjja maMM  dkkd kKA kdk ksks keke sisksnf skk lorem jjdj smsmj sjjja maMM  dkkd kKA kdk ksks keke sisksnf skk"},
            {img: "563x563", title: "You know how edey be na", desc: "lorem jjdj smsmj sjjja maMM  dkkd kKA kdk ksks keke sisksnf skk lorem jjdj smsmj sjjja maMM  dkkd kKA kdk ksks keke sisksnf skk"},
            {img: "567x567", title: "You know how edey be na", desc: "lorem jjdj smsmj sjjja maMM  dkkd kKA kdk ksks keke sisksnf skk lorem jjdj smsmj sjjja maMM  dkkd kKA kdk ksks keke sisksnf skk"},
            {img: "568x568", title: "You know how edey be na", desc: "lorem jjdj smsmj sjjja maMM  dkkd kKA kdk ksks keke sisksnf skk lorem jjdj smsmj sjjja maMM  dkkd kKA kdk ksks keke sisksnf skk"},
            {img: "561x561", title: "You know how edey be na", desc: "lorem jjdj smsmj sjjja maMM  dkkd kKA kdk ksks keke sisksnf skk lorem jjdj smsmj sjjja maMM  dkkd kKA kdk ksks keke sisksnf skk"},
            {img: "562x562", title: "You know how edey be na", desc: "lorem jjdj smsmj sjjja maMM  dkkd kKA kdk ksks keke sisksnf skk lorem jjdj smsmj sjjja maMM  dkkd kKA kdk ksks keke sisksnf skk"},
            {img: "569x569", title: "You know how edey be na", desc: "lorem jjdj smsmj sjjja maMM  dkkd kKA kdk ksks keke sisksnf skk lorem jjdj smsmj sjjja maMM  dkkd kKA kdk ksks keke sisksnf skk"}]
        }
    }
    render() {
        const items = this.state.items.map((item, i) => <EventCard key={i} img={`https://source.unsplash.com/random/${item.img}`} title={item.title} desc={item.desc}/>)
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

export default AllEvents;