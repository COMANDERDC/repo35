![image](https://github.com/COMANDERDC/repo35/assets/125705609/ae9a256b-28b3-460b-9ba8-ec02bd4e8104)
![image](https://github.com/COMANDERDC/repo35/assets/125705609/7561ec4a-7eeb-407a-b736-4326ad583f26)
 - name: Scan Docker image for vulnerabilities using Docker Scout
        id: docker-scout
        uses: docker/scout-action@v1
        with:
          command: cves
          image: ${{ steps.meta.outputs.tags }}
          only-severities: critical,high
          format: table

Używa akcji docker/scout-action w wersji v1, która służy do skanowania obrazów Docker.

  - name: Fail if vulnerabilities are found
        if: failure()
        run: exit 1

Warunek uruchomienia tego kroku. Jeśli poprzedni krok (docker-scout) zakończył się niepowodzeniem (czyli znalazł luki o krytycznej lub wysokiej ważności), ten krok zostanie uruchomiony.
