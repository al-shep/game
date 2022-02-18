(function(window, _) {
  window.game = window.game || {
    numz: {},
    phyz: {

      // getting distance between
      getDistance: function (pointA, pointB) {
        const
          distanceX = pointB.x - pointA.x,
          distanceY = pointB.y - pointA.y,
          distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY)
        return distance
      },

      /**
       * Returns an Object with basic properties utilized in a 2D physics system.
       * On top of simply physics properties, the body has template methods
       * handleCollision() and update()
       * 
       * @param  {String} type:                       A String, should be unique to your system, representing the type of body 
       * @param  {Object} options. 
       * @param  {Number} options.velocityX:          The body's velocity on the x scale
       * @param  {Nubmer} options.velocityY:          The body's velocity on the y axis
       * @param  {Number} options.rotationalVelocity: The body's rotation velocity
       * @param  {Number} options.integrity:          The body's integrity. Binary value. 0 - the body should break apart of explode, 1 - the body is intact
       * @param  {Number} options.density:            The body's density. Can be used to calculate collission force, using the ratio of densities to determine kinetic energy distribution of the colliding bodies.
       * @param  {Number} options.volatility:         The body's volatility/instability. Can be used to calculate how unstable or explosive an object may be. Can be used as a multiplier to the force of a collision. 
       * @return {Object}                             The body
       */
      makeBody: function (type, {
        velocityX = 0,
        velocityY = 0,
        rotationalVelocity = 0,
        integrity = 1,
        density = 1,
        volatility = 0
      } = {}) {
        if (type === undefined) throw new Error("You must provide a valid String for the type parameter!")
        return {
          velocityX = velocityX,
          velocityY = velocityY,
          rotationalVelocity = rotationalVelocity,
          integrity = integrity,
          density = density,
          volatility = volatility,
          /**
           * @param {Number}: A number representing the force of the impact
           * @param {Object}: Teh other body involved in the collision 
           */
          handleCollision: function(impact, body) {
            // template method //
          },

          /**
           * can be overridden in the body to provide a custom update() method
           */ 
          update(event) {
            // template method //
          }
        }
      },
    },
  }
}(window, window._))
