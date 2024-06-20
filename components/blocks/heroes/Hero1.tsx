import { MoveRight, PhoneCall } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Image, Action } from '@/typescript/action'
import Link from 'next/link'

type AdditionalParam = {
  banner_title: string
  banner_description: string
}

type Banner = {
  bg_color: string
  text_color: string
  banner_title: string
  banner_description: string
  call_to_action: Action
  banner_image: Image
  $: AdditionalParam
}

type BannerProps = {
  banner: Banner
}

export const Hero1 = ({ banner }: BannerProps) => (
  <div
    className='w-full py-20 lg:py-40'
    style={{
      background: banner?.bg_color ? banner.bg_color : '',
    }}
  >
    <div className='container mx-auto'>
      <div className='grid grid-cols-1 items-center gap-8 lg:grid-cols-2'>
        <div className='flex flex-col gap-4'>
          <div className='flex flex-col gap-4'>
            {banner.banner_title && (
              <h1 className='font-regular max-w-lg text-left text-5xl tracking-tighter md:text-7xl'>
                {banner.banner_title}
              </h1>
            )}
            {banner.banner_description && (
              <p
                style={{
                  color: banner?.text_color ? banner.text_color : '#222',
                }}
                className='max-w-md text-left text-xl leading-relaxed tracking-tight text-muted-foreground'
              >
                {banner?.banner_description}
              </p>
            )}
          </div>
          <div className='flex flex-row gap-4'>
            {banner.call_to_action.title && banner.call_to_action.href && (
              <Button asChild size='lg' className='gap-4' variant='outline'>
                <Link href={banner?.call_to_action.href}>
                  {banner?.call_to_action.title}
                  <PhoneCall className='h-4 w-4' />
                </Link>
              </Button>
            )}

            <Button size='lg' className='gap-4'>
              Sign up here <MoveRight className='h-4 w-4' />
            </Button>
          </div>
        </div>
        <div className='aspect-square rounded-md bg-muted'>
          {banner.banner_image && (
            <img
              alt={banner.banner_image.filename}
              src={banner.banner_image.url}
              className='flex justify-center'
            />
          )}
        </div>
      </div>
    </div>
  </div>
)
