import { Button } from '@/components/ui/button'
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'
import Link from 'next/link'
import { Input } from '@/components/ui/input'
import { Facebook, Linkedin, Twitter, Share } from 'lucide-react'

export default function Component() {
  return (
    <div className='container mx-auto grid grid-cols-3 gap-8 py-12'>
      <article className='prose prose-gray dark:prose-invert col-span-2'>
        <div className='space-y-4'>
          <h1 className='text-4xl font-bold tracking-tight'>
            The Joke Tax Chronicles: When Laughter Became a Commodity
          </h1>
          <div className='flex items-center gap-4 text-sm text-muted-foreground'>
            <div>
              <span className='font-medium'>Published:</span> <time dateTime='2023-06-21'>June 21, 2023</time>
            </div>
            <div>
              <span className='font-medium'>Updated:</span> <time dateTime='2023-06-21'>June 21, 2023</time>
            </div>
            <div>
              <span className='font-medium'>Reading Time:</span> 8 min
            </div>
            <div>
              <span className='font-medium'>Author:</span> John Doe
            </div>
          </div>
          <div className='flex items-center gap-4'>
            <Button variant='ghost' size='icon'>
              <Share className='h-5 w-5' />
              <span className='sr-only'>Share</span>
            </Button>
            <Button variant='ghost' size='icon'>
              <Twitter className='h-5 w-5' />
              <span className='sr-only'>Twitter</span>
            </Button>
            <Button variant='ghost' size='icon'>
              <Facebook className='h-5 w-5' />
              <span className='sr-only'>Facebook</span>
            </Button>
            <Button variant='ghost' size='icon'>
              <Linkedin className='h-5 w-5' />
              <span className='sr-only'>LinkedIn</span>
            </Button>
          </div>
        </div>
        <div className='mt-8'>
          <p>
            Once upon a time, in a far-off land, there was a very lazy king who spent all day lounging on his throne.
            One day, his advisors came to him with a problem: the kingdom was running out of money.
          </p>
          <p>
            The king thought long and hard, and finally came up with a brilliant plan: he would tax the jokes in the
            kingdom.
          </p>
          <p>
            Jokester began sneaking into the castle in the middle of the night and leaving jokes all over the place:
            under the king&apos;s pillow, in his soup, even in the royal toilet. The king was furious, but he
            couldn&apos;t seem to stop Jokester.
          </p>
          <p>
            And then, one day, the people of the kingdom discovered that the jokes left by Jokester were so funny that
            they couldn&apos;t help but laugh. And once they started laughing, they couldn&apos;t stop.
          </p>
          <figure>
            <img
              src='/placeholder.svg'
              alt='Cover image'
              width={1250}
              height={340}
              className='aspect-video overflow-hidden rounded-lg object-cover'
            />
            <figcaption>Image caption goes here</figcaption>
          </figure>
          <p>The king&apos;s subjects were not amused. They grumbled and complained, but the king was firm:</p>
          <ul>
            <li>1st level of puns: 5 gold coins</li>
            <li>2nd level of jokes: 10 gold coins</li>
            <li>3rd level of one-liners : 20 gold coins</li>
          </ul>
          <p>
            As a result, people stopped telling jokes, and the kingdom fell into a gloom. But there was one person who
            refused to let the king&apos;s foolishness get him down: a court jester named Jokester.
          </p>
        </div>
        <div className='mt-8'>
          <h2 className='text-2xl font-bold'>Post Tags</h2>
          <div className='mt-4 flex flex-wrap gap-2'>
            <Button variant='outline' size='sm'>
              Jokes
            </Button>
            <Button variant='outline' size='sm'>
              Taxation
            </Button>
            <Button variant='outline' size='sm'>
              Monarchy
            </Button>
            <Button variant='outline' size='sm'>
              Satire
            </Button>
            <Button variant='outline' size='sm'>
              Laughter
            </Button>
          </div>
        </div>
        <div className='mt-8 flex items-start gap-4'>
          <Avatar className='h-12 w-12'>
            <AvatarImage src='/placeholder-user.jpg' />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          <div>
            <h3 className='text-lg font-medium'>John Doe</h3>
            <p className='text-sm text-muted-foreground'>
              John Doe is a writer and satirist who has been chronicling the absurdities of the world for over a decade.
              His work has appeared in various publications, and he is known for his sharp wit and keen observation of
              human nature.
            </p>
            <Link href='#' className='text-sm font-medium hover:underline' prefetch={false}>
              View more posts by John Doe
            </Link>
          </div>
        </div>
        <div className='mt-8 flex items-center gap-4'>
          <Button variant='ghost' size='icon'>
            <Share className='h-5 w-5' />
            <span className='sr-only'>Share</span>
          </Button>
          <Button variant='ghost' size='icon'>
            <Twitter className='h-5 w-5' />
            <span className='sr-only'>Twitter</span>
          </Button>
          <Button variant='ghost' size='icon'>
            <Facebook className='h-5 w-5' />
            <span className='sr-only'>Facebook</span>
          </Button>
          <Button variant='ghost' size='icon'>
            <Linkedin className='h-5 w-5' />
            <span className='sr-only'>LinkedIn</span>
          </Button>
        </div>
      </article>
      <aside className='space-y-8'>
        <div>
          <h2 className='text-2xl font-bold'>Categories</h2>
          <div className='mt-4 grid grid-cols-2 gap-4'>
            <div className='rounded-md bg-muted p-4'>
              <h3 className='text-lg font-medium'>Humor (12)</h3>
              <p className='text-sm text-muted-foreground'>Explore the lighter side of life.</p>
              <Link href='#' className='text-sm font-medium hover:underline' prefetch={false}>
                View More
              </Link>
            </div>
            <div className='rounded-md bg-muted p-4'>
              <h3 className='text-lg font-medium'>Politics (8)</h3>
              <p className='text-sm text-muted-foreground'>Dive into the world of political satire.</p>
              <Link href='#' className='text-sm font-medium hover:underline' prefetch={false}>
                View More
              </Link>
            </div>
            <div className='rounded-md bg-muted p-4'>
              <h3 className='text-lg font-medium'>History (6)</h3>
              <p className='text-sm text-muted-foreground'>Uncover the past through humorous lenses.</p>
              <Link href='#' className='text-sm font-medium hover:underline' prefetch={false}>
                View More
              </Link>
            </div>
            <div className='rounded-md bg-muted p-4'>
              <h3 className='text-lg font-medium'>Fiction (10)</h3>
              <p className='text-sm text-muted-foreground'>Dive into imaginative tales and stories.</p>
              <Link href='#' className='text-sm font-medium hover:underline' prefetch={false}>
                View More
              </Link>
            </div>
          </div>
        </div>
        <div>
          <h2 className='text-2xl font-bold'>Popular Tags</h2>
          <div className='mt-4 flex flex-wrap gap-2'>
            <Button variant='outline' size='sm'>
              Jokes
            </Button>
            <Button variant='outline' size='sm'>
              Taxation
            </Button>
            <Button variant='outline' size='sm'>
              Monarchy
            </Button>
            <Button variant='outline' size='sm'>
              Satire
            </Button>
            <Button variant='outline' size='sm'>
              Laughter
            </Button>
          </div>
          <div className='mt-4'>
            <Input type='search' placeholder='Search tags...' className='w-full' />
          </div>
        </div>
        <div>
          <h2 className='text-2xl font-bold'>Related Posts</h2>
          <div className='mt-4 grid gap-4'>
            <Link
              href='#'
              className='grid grid-cols-[80px_1fr] items-start gap-4 rounded-md p-2 hover:bg-muted/40'
              prefetch={false}
            >
              <img
                src='/placeholder.svg'
                alt='Related post'
                width={80}
                height={60}
                className='aspect-video rounded-md object-cover'
              />
              <div>
                <h3 className='text-base font-medium'>The Rise and Fall of the Joke Tax Empire</h3>
                <p className='text-sm text-muted-foreground'>
                  Exploring the unintended consequences of the king&apos;s short-sighted policy.
                </p>
              </div>
            </Link>
            <Link
              href='#'
              className='grid grid-cols-[80px_1fr] items-start gap-4 rounded-md p-2 hover:bg-muted/40'
              prefetch={false}
            >
              <img
                src='/placeholder.svg'
                alt='Related post'
                width={80}
                height={60}
                className='aspect-video rounded-md object-cover'
              />
              <div>
                <h3 className='text-base font-medium'>
                  The Jokester&apos;s Revenge: How One Man Brought Laughter Back to the Kingdom
                </h3>
                <p className='text-sm text-muted-foreground'>
                  The inspiring story of how a court jester fought against the Joke Tax.
                </p>
              </div>
            </Link>
            <Link
              href='#'
              className='grid grid-cols-[80px_1fr] items-start gap-4 rounded-md p-2 hover:bg-muted/40'
              prefetch={false}
            >
              <img
                src='/placeholder.svg'
                alt='Related post'
                width={80}
                height={60}
                className='aspect-video rounded-md object-cover'
              />
              <div>
                <h3 className='text-base font-medium'>The Economic Impact of the Joke Tax: A Cautionary Tale</h3>
                <p className='text-sm text-muted-foreground'>
                  How the Joke Tax led to the downfall of the kingdom&apos;s economy.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </aside>
    </div>
  )
}
