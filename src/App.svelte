<style>
  :global(*, *:before, *:after) {
    box-sizing: border-box;
  }
  :global(body) {
    font-family: sans-serif;
    background-color: #eaf6fa;
  }
  .container {
    display: flex;
    min-height: 98vh;
    justify-content: center;
    align-items: center;
  }
  ul {
    list-style: none;
    max-width: 30em;
    padding: 0;
  }
  .user {
    display: flex;
    align-items: center;
    padding: 12px 18px 12px 12px;
    background-color: #76a0d1;
  }
  li {
    margin-top: 1em;
    min-width: 25em;
  }
  .user a {
    font-size: 1.65em;
    text-decoration: none;
    color: #2e2e2e;
    font-weight: 600;
  }
  .user a:hover {
    text-decoration: underline;
  }
  .user img {
    width: 48px;
    height: 48px;
    margin-right: 12px;
    border-radius: 9999px;
  }
  .user button {
    margin-left: auto;
    border: none;
    padding: 6px 12px;
    background-color: #666;
    font-weight: 600;
    color: #fac0c0;
  }
  .refresh {
    border: none;
    border-radius: 4px;
    padding: 5px 10px;
    background-color: rgb(90, 241, 85);
    font-size: 1.2em;
  }
</style>

<script>
  import { refresh, suggestions, replace } from './users';
</script>

<div class="container">
  <div>
    <button class="refresh" on:click={refresh}>refresh</button>
    {#if $suggestions}
      <ul>
        {#each $suggestions as user}
          <li>
            <div class="user">
              <img src={user.avatar_url} alt={user.login} />
              <a href={user.html_url}>{user.login}</a>
              <button class="refresh" on:click={() => replace(user.login)}>x</button>
            </div>
          </li>
        {/each}
      </ul>
    {/if}
  </div>
</div>