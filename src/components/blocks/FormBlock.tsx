import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { genres } from '../../assets/js/utils'
import { addMovie, createMovie, selectEditStatus, selectMovie, setOpenForm, updateMovie } from "../../store/reducers/movies";
import { Form, Input, Select, Button } from 'antd'

const FormBlock: React.FC = () => {
    const [movie, setMovie] = useState(useSelector(selectMovie))
    const isEdit = useSelector(selectEditStatus)
    const dispatch = useDispatch()

    const setMovieByKey = (data: { key: string, value: any }) => {
        setMovie({...movie, [data.key]: data.value})
    }

    useEffect(() => {
        dispatch(addMovie(movie))
    }, [movie])

    const handleGenres = (selectedGenres: string[]) => {
        setMovieByKey({key: 'genres', value: selectedGenres })
    }

    const genresSelect = genres.map((genre) => {
        return {
            value: genre
        }
    })

    const closeShowModal = () => {
        dispatch(setOpenForm(false))
    }
    const create = () => {
        dispatch(createMovie())
    }
    const update = () => {
        dispatch(updateMovie())
    }

    const rules = {
        titleRules: [
            {
              required: true,
              whitespace: true,
              message: 'Please input your E-mail!',
            }
        ],
        tagline: [
            {
                required: false,
            }
        ],
        vote_average: [
            {
                required: false,
            }
        ],
        vote_count: [
            {
                required: false,
            }
        ],
        release_date: [
            {
                required: false,
            }
        ],
        poster_path: [
            {
                required: true,
            }
        ],
        overview: [
            {
                required: true,
            }
        ],
        budget: [
            {
                required: false,
            }
        ],
        revenue: [
            {
                required: false,
            }
        ],
        runtime: [
            {
                required: true,
            }
        ],
        genres: [
            {
                required: true,
            }
        ],
    }

    const tailLayout = {
        wrapperCol: { offset: 8, span: 16 },
    }
    return (
        <Form 
            layout='vertical'
            className="form-modal"
        >
            <Form.Item
                label='Title'
                name='title'
                rules={rules.titleRules}
                initialValue={movie.title}
            >
                <Input
                    value={movie.title}
                    onChange={({ target }) => setMovieByKey({ key: 'title', value: target.value })}
                    placeholder="example: La La Land"
                />
            </Form.Item>
            <Form.Item
                label='Movie average raiting'
                name='vote_average'
                rules={rules.vote_average}
                initialValue={movie?.vote_average}
            >
                <Input
                    onChange={({ target }) => setMovieByKey({ key: 'vote_average', value: Number(target.value) })}
                    placeholder="example: 7.9"
                />
            </Form.Item>
            <Form.Item
                label='Total count of votes for the movie'
                name='vote_count'
                rules={rules.vote_count}
                initialValue={movie?.vote_count}
            >
                <Input
                    onChange={({ target }) => setMovieByKey({ key: 'vote_count', value: Number(target.value) })}
                    placeholder="example: 6782"
                />
            </Form.Item>
            <Form.Item
                label='Movie tagline'
                name='tagline'
                rules={rules.titleRules}
                initialValue={movie?.tagline}
            >
                <Input
                    onChange={({ target }) => setMovieByKey({ key: 'tagline', value: target.value })}
                    placeholder="example: Here's to the fools who dream."
                />
            </Form.Item>
            <Form.Item
                label='Release Date'
                name='release_date'
                rules={rules.release_date}
                initialValue={movie?.release_date}
            >
                <Input
                    type="date"
                    onChange={({ target }) => setMovieByKey({ key: 'release_date', value: target.value })}
                />
            </Form.Item>
            <Form.Item
                label='Url to the poster image'
                name='poster_path'
                rules={rules.poster_path}
                initialValue={movie.poster_path}
            >
                <Input
                    onChange={({ target }) => setMovieByKey({ key: 'poster_path', value: target.value })}
                    placeholder="example: https://image.tmdb.org/t/p/w500/ylXCdC106IKiarftHkcacasaAcb.jpg"
                />
            </Form.Item>
            <Form.Item
                label='Short description of the movie'
                name='overview'
                rules={rules.overview}
                initialValue={movie.overview}
            >
                <Input.TextArea
                    onChange={({ target }) => setMovieByKey({ key: 'overview', value: target.value })}
                    placeholder="example: Mia, an aspiring actress, serves lattes to movie stars in between auditions and Sebastian, a jazz musician, scrapes by playing cocktail party gigs in dingy bars, but as success mounts they are faced with decisions that begin to fray the fragile fabric of their love affair, and the dreams they worked so hard to maintain in each other threaten to rip them apart."
                />
            </Form.Item>
            <Form.Item
                label='Movie production budget'
                name='budget'
                rules={rules.budget}
                initialValue={movie?.budget}
            >
                <Input
                    onChange={({ target }) => setMovieByKey({ key: 'budget', value: Number(target.value) })}
                    placeholder="example: 30000000, minimum: 0" 
                />
            </Form.Item>
            <Form.Item
                label='Movie revenue'
                name='revenue'
                rules={rules.revenue}
                initialValue={movie?.revenue}
            >
                <Input
                    onChange={({ target }) => setMovieByKey({ key: 'revenue', value: Number(target.value) })}
                    placeholder="example: 445435700, minimum: 0" 
                />
            </Form.Item>
            <Form.Item
                label='Movie duration time'
                name='runtime'
                rules={rules.runtime}
                initialValue={movie.runtime}
            >
                <Input
                    onChange={({ target }) => setMovieByKey({ key: 'runtime', value: Number(target.value) })}
                    placeholder="example: 128, minimum: 0" 
                />
            </Form.Item>
            <Form.Item
                label='List of genres'
                name='genres'
                rules={rules.genres}
                initialValue={movie.genres}
            >
                <Select
                    onChange={handleGenres}
                    mode="multiple"
                    placeholder="Select genres"
                    options={genresSelect}
                />
            </Form.Item>
            <Form.Item {...tailLayout}>
                <Button type="text" htmlType="button" onClick={closeShowModal}>
                    Close
                </Button>
                <Button type="primary" htmlType="button" onClick={() => isEdit ? update() : create()}>
                    {isEdit ? 'Save' : 'Add'}
                </Button>
            </Form.Item>
        </Form>
    )
}

export default FormBlock;