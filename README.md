# Worker Error Handler


## Example
```js
import { Router } from 'itty-router';
import { handle_error } from "./handle_error"

const router = Router()


// GET index
router.get('/', () => new Response('This is the Index!'))

// GET returns 403
router.get('/403', () => {
  throw { status: 403 }
})

// GET a 404 with a custom message
router.get('/message', () => {
    throw { status: 404, message: 'This is a message that wasn\'t found.' }
})

// GET an error of your choice
router.get('/error/:status', ({ params }) => {
    throw { status: Number(params.status) }
})

// Return 404 for anything else that wasn't handled
router.all('*', () => { throw { status: 404 } });

addEventListener("fetch", (event) => {
    event.respondWith(router.handle(event.request, event).catch((err) => handle_error(err)));
});
```
