"use client";

interface AboutInstructorCardProps {
  bio: string;
  projectsIntro: string;
  projects: string[];
  philosophyIntro: string;
  philosophy: string[];
  additionalInfo?: string[];
}

export default function AboutInstructorCard({
  bio,
  projectsIntro,
  projects,
  philosophyIntro,
  philosophy,
  additionalInfo
}: AboutInstructorCardProps) {
  return (
    <div className="bg-gray-200/10 backdrop-blur-sm rounded-2xl shadow-lg px-6 md:px-8 lg:px-10 py-8 md:py-10">
      <p className="text-base md:text-lg text-gray-900 leading-relaxed mb-6">
        {bio}
      </p>

      {projectsIntro && (
        <p className="text-base md:text-lg text-gray-900 leading-relaxed mb-4">
          {projectsIntro}
        </p>
      )}

      {projects && projects.length > 0 && (
        <ul className="space-y-2 mb-6 text-base md:text-lg text-gray-900">
          {projects.map((project, index) => (
            <li key={index} className="flex gap-3 items-start">
              <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-purple-600" />
              <span>{project}</span>
            </li>
          ))}
        </ul>
      )}

      {additionalInfo && additionalInfo.map((info, index) => (
        <p key={index} className="text-base md:text-lg text-gray-900 leading-relaxed mb-6">
          {info}
        </p>
      ))}

      {philosophyIntro && (
        <div>
          <p className="text-base md:text-lg font-semibold text-gray-900 mb-2">
            {philosophyIntro}
          </p>
          {philosophy && philosophy.length > 0 && (
            <ul className="space-y-2 text-base md:text-lg text-gray-900">
              {philosophy.map((item, index) => (
                <li key={index} className="flex gap-3 items-start">
                  <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-purple-600" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
}

