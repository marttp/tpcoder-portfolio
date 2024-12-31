import { For, JSX } from "solid-js";

import { Course } from "../../data/props";

const CourseTypeSection = ({
  title,
  data,
}: {
  title: string;
  data: Course[];
}): JSX.Element => (
  <div class="my-10">
    <h3 class="text-2xl font-semibold">{title}</h3>
    <div class="flex flex-wrap gap-2">
      <For each={data}>
        {(course) => (
          <div class="my-4">
            <a
              href={course.url}
              class="text-blue-600 hover:underline dark:text-primary-light"
              target="_blank"
              rel="noopener noreferrer"
            >
              {course.name}
            </a>
            <p class="text-sm text-black dark:text-gray-500">{course.description}</p>
            <p class="text-sm">{`Language: ${course.lang}`}</p>
          </div>
        )}
      </For>
    </div>
  </div>
);

export default CourseTypeSection;
