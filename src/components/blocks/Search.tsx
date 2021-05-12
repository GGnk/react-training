import React from "react";
import {useFormik} from "formik";
import {useDispatch} from "react-redux";
import {fetchListMovies} from "../../store/reducers/movies";
import { useRouter } from "next/router";

const Search: React.FC = () => {
    const { push } = useRouter()
    const dispatch = useDispatch()

    const formik = useFormik({
        initialValues: {
            search: ''
        },
        onSubmit: ({ search }) => {
            push(`search?query=${search}`)
            dispatch(fetchListMovies({ search }))
        },
    });

    const title = 'Find your movie';
    return (
        <div className='search'>
            <div className="title">{ title.toUpperCase() }</div>
            <div className="wrap">
                <input
                    type="text"
                    name='search'
                    placeholder="What do you want to watch?"
                    value={formik.values.search}
                    onChange={formik.handleChange}
                />
                <div className="btn search_but" onClick={() => formik.handleSubmit()}>SEARCH</div>
            </div>
        </div>
    );
}

export default Search;
