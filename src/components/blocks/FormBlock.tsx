import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { genres } from '../../assets/js/utils'
import { createMovie, selectEditStatus, selectMovie, setOpenForm, updateMovie } from "../../store/reducers/movies";
import { Form, Input, Select, Button } from 'antd'
import { useFormik } from 'formik';

const FormBlock: React.FC = () => {
    const isEdit = useSelector(selectEditStatus)
    const dispatch = useDispatch()
    const formik = useFormik({
        initialValues: useSelector(selectMovie),
        onSubmit: movie => {
            isEdit ? dispatch(updateMovie(movie)) : dispatch(createMovie(movie))
        },
    });

    const genresSelect = genres.map((genre) => ({
        value: genre
    }))

    const closeShowModal = () => {
        dispatch(setOpenForm(false))
    }

    const rules = {
        titleRules: [
            {
              required: true,
              whitespace: true,
              message: 'Please input your title!',
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
                type: 'date'
            }
        ],
        poster_path: [
            {
                required: true,
                type: 'url',
                whitespace: true,
                message: 'Please insert a link to the picture!',
            }
        ],
        overview: [
            {
                required: true,
                whitespace: true,
                message: 'Please write a short description of the movie!',
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
                whitespace: true,
                message: 'Please specify movie duration time!',
            }
        ],
        genres: [
            {
                required: true,
                message: 'Please select the movie genres!',
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
            onFinish={formik.handleSubmit}
        >
            <Form.Item
                label='Title'
                name='title'
                rules={rules.titleRules}
                initialValue={formik.values.title}
            >
                <Input
                    onChange={formik.handleChange}
                    placeholder="example: La La Land"
                />
            </Form.Item>
            <Form.Item
                label='Movie average raiting'
                name='vote_average'
                rules={rules.vote_average}
                initialValue={formik.values.vote_average}
            >
                <Input
                    onChange={({ target }) => formik.setFieldValue("vote_average", Number(target.value))}
                    placeholder="example: 7.9"
                />
            </Form.Item>
            <Form.Item
                label='Total count of votes for the movie'
                name='vote_count'
                rules={rules.vote_count}
                initialValue={formik.values.vote_count}
            >
                <Input
                    onChange={({ target }) => formik.setFieldValue("vote_count", Number(target.value))}
                    placeholder="example: 6782"
                />
            </Form.Item>
            <Form.Item
                label='Movie tagline'
                name='tagline'
                rules={rules.titleRules}
                initialValue={formik.values.tagline}
            >
                <Input
                    onChange={formik.handleChange}
                    placeholder="example: Here's to the fools who dream."
                />
            </Form.Item>
            <Form.Item
                label='Release Date'
                name='release_date'
                rules={rules.release_date as []}
                initialValue={formik.values.release_date}
            >
                <Input
                    type="date"
                    onChange={formik.handleChange}
                />
            </Form.Item>
            <Form.Item
                label='Url to the poster image'
                name='poster_path'
                rules={rules.poster_path as []}
                initialValue={formik.values.poster_path}
            >
                <Input
                    onChange={formik.handleChange}
                    placeholder="example: https://image.tmdb.org/t/p/w500/ylXCdC106IKiarftHkcacasaAcb.jpg"
                />
            </Form.Item>
            <Form.Item
                label='Short description of the movie'
                name='overview'
                rules={rules.overview}
                initialValue={formik.values.overview}
            >
                <Input.TextArea
                    onChange={({ target }) => formik.setFieldValue("overview", target.value)}
                    placeholder="example: Mia, an aspiring actress, serves lattes to movie stars in between auditions and Sebastian, a jazz musician, scrapes by playing cocktail party gigs in dingy bars, but as success mounts they are faced with decisions that begin to fray the fragile fabric of their love affair, and the dreams they worked so hard to maintain in each other threaten to rip them apart."
                />
            </Form.Item>
            <Form.Item
                label='Movie production budget'
                name='budget'
                rules={rules.budget}
                initialValue={formik.values.budget}
            >
                <Input
                    onChange={({ target }) => formik.setFieldValue("budget", Number(target.value))}
                    placeholder="example: 30000000, minimum: 0"
                />
            </Form.Item>
            <Form.Item
                label='Movie revenue'
                name='revenue'
                rules={rules.revenue}
                initialValue={formik.values.revenue}
            >
                <Input
                    onChange={({ target }) => formik.setFieldValue("revenue", Number(target.value))}
                    placeholder="example: 445435700, minimum: 0"
                />
            </Form.Item>
            <Form.Item
                label='Movie duration time'
                name='runtime'
                rules={rules.runtime}
                initialValue={formik.values.runtime}
            >
                <Input
                    onChange={({ target }) => formik.setFieldValue("runtime", Number(target.value))}
                    placeholder="example: 128, minimum: 0"
                />
            </Form.Item>
            <Form.Item
                label='List of genres'
                name='genres'
                rules={rules.genres}
                initialValue={formik.values.genres}
            >
                <Select
                    onChange={(genres: string[]) => formik.setFieldValue("genres", genres)}
                    mode="multiple"
                    placeholder="Select genres"
                    options={genresSelect}
                />
            </Form.Item>
            <Form.Item {...tailLayout}>
                <Button type="text" htmlType="button" onClick={closeShowModal}>
                    Close
                </Button>
                <Button type="primary" htmlType="submit">
                    {isEdit ? 'Save' : 'Add'}
                </Button>
            </Form.Item>
        </Form>
    )
}

export default FormBlock;
