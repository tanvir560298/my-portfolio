import { useState } from 'react'
import { ArrowLeft, CalendarDays, Clock3, Play, Video as VideoIcon } from 'lucide-react'
import { Link, useParams } from 'react-router-dom'
import { resources } from '../data/content'

export function ResourceDetail() {
  const { slug } = useParams()
  const resource = resources.find((item) => item.slug === slug)
  const [activeVideoIndex, setActiveVideoIndex] = useState(0)

  if (!resource) {
    return (
      <main className="mx-auto flex min-h-[70vh] max-w-3xl flex-col items-center justify-center px-6 text-center">
        <p className="text-sm font-bold uppercase tracking-widest text-brand-700 dark:text-brand-300">
          Resource not found
        </p>
        <h1 className="mt-3 font-display text-4xl font-bold text-slate-950 dark:text-white">
          We could not find that article.
        </h1>
        <Link
          className="mt-8 rounded-full bg-brand-700 px-6 py-3 font-semibold text-white hover:bg-brand-800"
          to="/resources"
        >
          Browse resources
        </Link>
      </main>
    )
  }

  const hasVideos = resource.videos && resource.videos.length > 0
  const activeVideo = hasVideos ? resource.videos![activeVideoIndex] : null

  return (
    <main>
      <article className={`mx-auto px-6 pb-24 pt-12 sm:px-8 lg:pt-20 ${hasVideos ? 'max-w-6xl' : 'max-w-4xl'}`}>
        <Link
          to="/resources"
          className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-brand-700 dark:text-slate-300 dark:hover:text-brand-300"
        >
          <ArrowLeft className="h-4 w-4" /> All resources
        </Link>
        <header className="mt-12 border-b border-slate-200 pb-12 dark:border-slate-800">
          <div className="flex flex-wrap items-center gap-3">
            <span className="rounded-full bg-brand-100 px-3 py-1 text-xs font-bold uppercase tracking-wider text-brand-800 dark:bg-brand-950 dark:text-brand-200">
              {resource.category}
            </span>
            <span className="rounded-full border border-amber-300 px-3 py-1 text-xs font-bold text-amber-800 dark:border-amber-700 dark:text-amber-200">
              {resource.status}
            </span>
          </div>
          <h1 className="mt-6 font-display text-4xl font-bold leading-tight text-slate-950 sm:text-6xl dark:text-white">
            {resource.title}
          </h1>
          <p className="mt-6 text-xl leading-8 text-slate-600 dark:text-slate-300">
            {resource.description}
          </p>
          <div className="mt-8 flex flex-wrap gap-6 text-sm text-slate-500 dark:text-slate-400">
            <span className="inline-flex items-center gap-2">
              <CalendarDays className="h-4 w-4" /> {resource.publishedAt}
            </span>
            <span className="inline-flex items-center gap-2">
              <Clock3 className="h-4 w-4" /> {resource.readingTime}
            </span>
          </div>
        </header>

        <div className="py-12">
          {hasVideos ? (
            <div className="grid gap-8 lg:grid-cols-3">
              {/* Left Side: Video Player & Active Video Details */}
              <div className="lg:col-span-2 space-y-6">
                <div className="relative aspect-video w-full overflow-hidden rounded-3xl border border-slate-200 bg-black shadow-lg dark:border-slate-800">
                  <iframe
                    className="absolute inset-0 h-full w-full"
                    src={`https://www.youtube.com/embed/${activeVideo?.youtubeId}?autoplay=0&rel=0`}
                    title={activeVideo?.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                </div>
                
                <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft dark:border-slate-800 dark:bg-slate-900">
                  <div className="flex flex-wrap items-center justify-between gap-4">
                    <h2 className="font-display text-2xl font-bold text-slate-950 dark:text-white">
                      {activeVideo?.title}
                    </h2>
                    {activeVideo?.duration && (
                      <span className="inline-flex items-center gap-1.5 rounded-lg bg-slate-100 px-3 py-1.5 text-xs font-semibold text-slate-600 dark:bg-slate-850 dark:text-slate-300">
                        <Clock3 className="h-3.5 w-3.5" /> {activeVideo.duration}
                      </span>
                    )}
                  </div>
                  {activeVideo?.description && (
                    <p className="mt-4 leading-7 text-slate-600 dark:text-slate-300 whitespace-pre-line">
                      {activeVideo.description}
                    </p>
                  )}
                </div>

                <div className="rounded-3xl bg-slate-50 p-6 dark:bg-slate-900/40 border border-slate-100 dark:border-slate-850/40">
                  <h3 className="font-display text-lg font-bold text-slate-950 dark:text-white mb-4">
                    Course Description
                  </h3>
                  {resource.content.map((paragraph, index) => (
                    <p
                      key={`${index}-${paragraph}`}
                      className="mb-4 text-base leading-7 text-slate-700 dark:text-slate-300 last:mb-0"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>

              {/* Right Side: Playlist Sidebar */}
              <div className="space-y-4">
                <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft dark:border-slate-800 dark:bg-slate-900">
                  <h3 className="font-display text-lg font-bold text-slate-950 dark:text-white mb-4 flex items-center gap-2">
                    <VideoIcon className="h-5 w-5 text-brand-600 dark:text-brand-400" />
                    Course Lessons
                  </h3>
                  
                  <div className="space-y-3 max-h-[550px] overflow-y-auto pr-1">
                    {resource.videos?.map((video, index) => {
                      const isActive = index === activeVideoIndex
                      return (
                        <button
                          key={video.youtubeId}
                          onClick={() => setActiveVideoIndex(index)}
                          className={`w-full flex items-start gap-3 rounded-2xl p-3 text-left transition duration-200 border ${
                            isActive
                              ? 'border-brand-500 bg-brand-50/50 text-brand-900 dark:bg-brand-950/20 dark:text-brand-100'
                              : 'border-transparent bg-slate-50 hover:bg-slate-100 text-slate-700 dark:bg-slate-800 dark:hover:bg-slate-700/80 dark:text-slate-300'
                          }`}
                        >
                          <span
                            className={`mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border text-xs font-semibold ${
                              isActive
                                ? 'border-brand-500 bg-brand-500 text-white'
                                : 'border-slate-300 bg-white text-slate-500 dark:border-slate-700 dark:bg-slate-900'
                            }`}
                          >
                            {isActive ? (
                              <Play className="h-3 w-3 fill-current" />
                            ) : (
                              index + 1
                            )}
                          </span>
                          
                          <div className="min-w-0 flex-1">
                            <span className="block text-sm font-semibold leading-tight line-clamp-2">
                              {video.title.replace(/Video \d+:\s*/, '')}
                            </span>
                            {video.duration && (
                              <span className="mt-1 flex items-center gap-1 text-[11px] text-slate-500 dark:text-slate-400">
                                <Clock3 className="h-3 w-3" /> {video.duration}
                              </span>
                            )}
                          </div>
                        </button>
                      )
                    })}
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <>
              {resource.content.map((paragraph, index) => (
                <p
                  key={`${index}-${paragraph}`}
                  className="mb-6 text-lg leading-9 text-slate-700 dark:text-slate-300"
                >
                  {paragraph}
                </p>
              ))}
              {resource.status === 'Planned Content' && (
                <aside className="mt-10 rounded-3xl border border-brand-200 bg-brand-50 p-7 dark:border-brand-900 dark:bg-brand-950/40">
                  <h2 className="font-display text-xl font-bold text-slate-950 dark:text-white">
                    This guide is being prepared.
                  </h2>
                  <p className="mt-2 leading-7 text-slate-600 dark:text-slate-300">
                    The current page is an honest preview. Full examples and exercises will be added
                    after the content has been reviewed.
                  </p>
                </aside>
              )}
            </>
          )}
        </div>

        <footer className="border-t border-slate-200 pt-8 dark:border-slate-800">
          <p className="text-sm font-semibold text-slate-500 dark:text-slate-400">Topics</p>
          <ul className="mt-3 flex flex-wrap gap-2">
            {resource.tags.map((tag) => (
              <li
                key={tag}
                className="rounded-lg bg-slate-100 px-3 py-1.5 text-sm text-slate-700 dark:bg-slate-800 dark:text-slate-200"
              >
                #{tag}
              </li>
            ))}
          </ul>
        </footer>
      </article>
    </main>
  )
}

export default ResourceDetail
