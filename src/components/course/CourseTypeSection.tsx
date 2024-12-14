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
            <p class="text-sm text-gray-500">{course.description}</p>
            <p class="text-sm">{`Language: ${course.lang}`}</p>
          </div>
        )}
      </For>
    </div>
    <p class="text-l mb-4 flex justify-center items-center text-center">
      In case of you want to support me. I really appreciate. Thank you very
      much. 🙇‍♂️
    </p>
    <div class="w-full flex justify-center mb-6">
      <img
        src="/assets/images/ThanaphoomBabparn-PromptPay-100THB.jpg"
        alt="PromptPay QR Code 100THB for Thanaphoom Babparn as donate"
        class="w-full md:w-3/12 h-full object-cover rounded-lg shadow-md"
      />
    </div>
  </div>
);

export default CourseTypeSection;
