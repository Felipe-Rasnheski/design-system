import * as Avatar from '@radix-ui/react-avatar'
import { styled } from '../../styles'

export const AvatarContainer = styled(Avatar.Root, {
  borderRdius: '$full',
  display: 'inline-block',
  widht: '$12',
  height: '$12',
  overflow: 'hidden',
})

export const AvatarImage = styled(Avatar.Image, {
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  borderRadius: '$full',
})

export const AvatarFallback = styled(Avatar.Fallback, {
  width: '100%',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '$gray600',
  color: '$gray100',
  borderRadius: '$full',

  svg: {
    width: '$12',
    height: '$12',
  },
})
