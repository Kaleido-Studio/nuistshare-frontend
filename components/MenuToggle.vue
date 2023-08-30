<script setup>
const value = defineModel()
</script>

<template>
  <div class="menuToggle sm:hidden block w-9 ">
    <input v-model="value" type="checkbox">
    <span />
    <span />
    <span />
  </div>
</template>

<style scoped lang="scss">
.menuToggle {
  position: relative;
  top: 2px;
  left:12px;
  // px;
  z-index: 3;
  -webkit-user-select: none;
  user-select: none;
  a {
    text-decoration: none;
    color: #000000;
    transition: all 0.3s ease;
    &:hover {
      color: tomato;
    }
  }
  input {
    display: block;
    width: 20px;
    height: 32px;
    position: absolute;
    top: -7px;
    cursor: pointer;
    opacity: 0; /* hide this */
    z-index: 2; /* and place it over the hamburger */
    -webkit-touch-callout: none;
  }
  span {
    position: relative;
    display: block;
    width: 20px;
    height: 3px;
    margin-bottom: 5px;
    position: relative;
    background: #2b2a2a;
    border-radius: 3px;
    z-index: 1;
    transform-origin: 4px 0px;
    transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0),
                background 0.5s cubic-bezier(0.77,0.2,0.05,1.0),
                opacity 0.55s ease;
    &:first-child {
      transform-origin: 0% 0%;
    }
    &:nth-last-child(2) {
      transform-origin: 0% 100%;
    }
  }
}

.menuToggle {
  input {
    &:checked ~ span {
      opacity: 1;
      transform: rotate(45deg) translate(-7px, -10px);
      background: #000000;
      &:nth-last-child(3) {
        opacity: 0;
        transform: rotate(0deg) scale(0.2, 0.2);
      }
      &:nth-last-child(2) {
        transform: rotate(-45deg) translate(-2px, 7px);
      }
    }
    &:checked ~ .menuItem {
      transform: none;
    }

  }
}

.menuItem {
  position: absolute;
  width: 300px;
  padding: 50px;
  padding-top: 125px;
  background: #ededed;
  list-style-type: none;
  -webkit-font-smoothing: antialiased;
  transform-origin: 0% 0%;
  transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0);
  li {
    padding: 10px 0;
    font-size: 22px;
  }
}

.menu--left {
  position: relative;
  width: 50%;
  .menuToggle {
    left: 0;
    input {
      left: 50px;
    }
    span {
      left: 50px;
    }
  }
  .menuItem {
    left: 50px;
    margin: -100px 0 0 -50px;
    transform: translate(-100%, 0);
  }
}

.menu--right {
  .menuToggle {
    position: fixed;
    right: 0;
    input {
      right: 50px;
    }
    span {
      right: 50px;
    }
  }
  .menuItem {
    right: 0;
    margin: -100px 0 0 0;
    transform: translate(100%, 0);
    li {
      a {
        &:hover {
          padding-left: 5px;
        }
      }
    }
  }
}

.menu--bottom--right {
  .menuToggle {
    position: fixed;
    top: auto;
    bottom: 0;
    right: 0;
    z-index: 1;
    input {
      right: 50px;
      bottom: 50px;
      top: auto;
      &:checked ~ .menuItem {
        transform: scale(1);
        li {
          &:nth-child(1) {
            -webkit-animation: text-slide-in .2s;
            -moz-animation: text-slide-in .2s;
            animation: text-slide-in .2s;
          }
          &:nth-child(2) {
            -webkit-animation: text-slide-in .3s;
            -moz-animation: text-slide-in .3s;
            animation: text-slide-in .3s;
          }
          &:nth-child(3) {
            -webkit-animation: text-slide-in .4s;
            -moz-animation: text-slide-in .4s;
            animation: text-slide-in .4s;
          }
          &:nth-child(4) {
            -webkit-animation: text-slide-in .5s;
            -moz-animation: text-slide-in .5s;
            animation: text-slide-in .5s;
          }
          &:nth-child(5) {
            -webkit-animation: text-slide-in .6s;
            -moz-animation: text-slide-in .6s;
            animation: text-slide-in .6s;
          }
        }
      }
    }
    span {
      right: 50px;
      bottom: 50px;
      top: auto;
    }
  }
  .menuItem {
    bottom: 0;
    right: 0;
    margin: 0;
    padding-top: 50px;
    padding-bottom: 125px;
    transform-origin: bottom right;
    transform: scale(0);
    -webkit-transition: -webkit-transform .3s,visibility 0s 0s;
    -moz-transition: -moz-transform .3s,visibility 0s 0s;
    transition: transform .3s,visibility 0s 0s;
    li {
      -webkit-backface-visibility: hidden;
      backface-visibility: hidden;
      a {
        &:hover {
          padding-left: 5px;
        }
      }
    }
  }
}

.menu--bottom--left {
  .menuToggle {
    position: fixed;
    top: auto;
    bottom: 0;
    left: 0;
    z-index: 1;
    input {
      left: 50px;
      bottom: 50px;
      top: auto;
      &:checked ~ .menuItem {
        transform: scale(1);
        li {
          &:nth-child(1) {
            -webkit-animation: text-slide-in .2s;
            -moz-animation: text-slide-in .2s;
            animation: text-slide-in .2s;
          }
          &:nth-child(2) {
            -webkit-animation: text-slide-in .3s;
            -moz-animation: text-slide-in .3s;
            animation: text-slide-in .3s;
          }
          &:nth-child(3) {
            -webkit-animation: text-slide-in .4s;
            -moz-animation: text-slide-in .4s;
            animation: text-slide-in .4s;
          }
          &:nth-child(4) {
            -webkit-animation: text-slide-in .5s;
            -moz-animation: text-slide-in .5s;
            animation: text-slide-in .5s;
          }
          &:nth-child(5) {
            -webkit-animation: text-slide-in .6s;
            -moz-animation: text-slide-in .6s;
            animation: text-slide-in .6s;
          }
        }
      }
    }
    span {
      left: 50px;
      bottom: 50px;
      top: auto;
    }
  }
  .menuItem {
    bottom: 0;
    left: 0;
    margin: 0;
    padding-top: 50px;
    padding-bottom: 125px;
    transform-origin: bottom left;
    transform: scale(0);
    -webkit-transition: -webkit-transform .3s,visibility 0s 0s;
    -moz-transition: -moz-transform .3s,visibility 0s 0s;
    transition: transform .3s,visibility 0s 0s;
    li {
      -webkit-backface-visibility: hidden;
      backface-visibility: hidden;
      a {
        &:hover {
          padding-left: 5px;
        }
      }
    }
  }
}

@keyframes text-slide-in {
  0% {
    -webkit-transform: translateX(100px);
    -moz-transform: translateX(100px);
    -ms-transform: translateX(100px);
    -o-transform: translateX(100px);
    transform: translateX(100px)
  }

  100% {
    -webkit-transform: translateY(0);
    -moz-transform: translateY(0);
    -ms-transform: translateY(0);
    -o-transform: translateY(0);
    transform: translateY(0)
  }
}
</style>
