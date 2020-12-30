import * as React from 'react'
import useSWR from 'swr'
import {loadCourse} from 'lib/courses'
import {FunctionComponent} from 'react'
import {GetServerSideProps} from 'next'
import fetcher from 'utils/fetcher'
import CoursePageLayout from 'components/pages/courses/course-page-layout'
import useLastResource from '../../hooks/use-last-resource'

type CourseProps = {
  course: any
}

const Course: FunctionComponent<CourseProps> = ({course}) => {
  const initialData = course
  const {data} = useSWR(course.url, fetcher, {initialData})

  const {slug, lessons} = data

  useLastResource({
    ...course,
    type: `course`,
    image_url: course.square_cover_480_url,
  })

  return (
    <CoursePageLayout
      lessons={lessons}
      course={data}
      ogImageUrl={`https://og-image-egghead-course.now.sh/${slug}?v=20201027`}
    />
  )
}

export default Course

export const getServerSideProps: GetServerSideProps = async ({res, params}) => {
  res.setHeader('Cache-Control', 's-maxage=120, stale-while-revalidate')
  const course = params && (await loadCourse(params.slug as string))
  return {
    props: {
      course,
    },
  }
}
